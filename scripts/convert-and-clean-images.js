const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const publicDir = path.join(__dirname, '..', 'public');

// Collect all source code contents
function getSourceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getSourceFiles(filePath, fileList);
    } else if (/\.(tsx?|jsx?|html|css|json)$/.test(file)) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const sourceFiles = getSourceFiles(srcDir);
const sourceContents = sourceFiles.map(f => ({
  path: f,
  content: fs.readFileSync(f, 'utf8')
}));

const allCodeText = sourceContents.map(s => s.content).join('\n');

// Collect all public images
function getPublicFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getPublicFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const publicFiles = getPublicFiles(publicDir);

async function run() {
  console.log('Starting conversion to WebP and cleaning unused images...\n');

  let convertedCount = 0;
  let deletedUnusedCount = 0;

  for (const filePath of publicFiles) {
    const relPath = path.relative(publicDir, filePath).replace(/\\/g, '/');
    const fileName = path.basename(filePath);
    const ext = path.extname(filePath).toLowerCase();

    // Check if image is referenced in source code
    const isReferenced = allCodeText.includes(relPath) || allCodeText.includes(fileName);

    if (!isReferenced && !['next.svg', 'vercel.svg', 'file.svg', 'globe.svg', 'window.svg', 'traveliq_hero_slider.mp4'].includes(fileName)) {
      console.log(`[DELETING UNUSED] ${relPath}`);
      fs.unlinkSync(filePath);
      deletedUnusedCount++;
      continue;
    }

    // If it's a JPG/JPEG/PNG image that IS used, convert to WebP
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const webpPath = filePath.substring(0, filePath.length - ext.length) + '.webp';
      const webpRelPath = relPath.substring(0, relPath.length - ext.length) + '.webp';
      const webpFileName = path.basename(webpPath);

      console.log(`[CONVERTING TO WEBP] ${relPath} -> ${webpRelPath}`);

      const inputBuffer = fs.readFileSync(filePath);
      let pipeline = sharp(inputBuffer);
      const metadata = await pipeline.metadata();

      let maxDim = 1280;
      if (relPath.includes('services')) maxDim = 800;
      if (relPath.includes('vande_bharat_hero')) maxDim = 960;

      if (metadata.width > maxDim || metadata.height > maxDim) {
        pipeline = pipeline.resize({
          width: metadata.width > metadata.height ? maxDim : null,
          height: metadata.height >= metadata.width ? maxDim : null,
          withoutEnlargement: true,
        });
      }

      const q = relPath.includes('vande_bharat_hero') ? 68 : 78;
      const webpBuffer = await pipeline.webp({ quality: q }).toBuffer();

      fs.writeFileSync(webpPath, webpBuffer);

      // Update all source code references
      for (const srcFile of sourceContents) {
        let updatedContent = srcFile.content;
        let changed = false;

        if (updatedContent.includes(relPath)) {
          updatedContent = updatedContent.replaceAll(relPath, webpRelPath);
          changed = true;
        }
        if (updatedContent.includes(fileName)) {
          updatedContent = updatedContent.replaceAll(fileName, webpFileName);
          changed = true;
        }

        if (changed) {
          srcFile.content = updatedContent;
          fs.writeFileSync(srcFile.path, updatedContent);
          console.log(`  Updated references in ${path.relative(process.cwd(), srcFile.path)}`);
        }
      }

      // Delete original JPG/PNG file after conversion
      fs.unlinkSync(filePath);
      convertedCount++;
    }
  }

  console.log(`\nCompleted! Converted ${convertedCount} images to WebP and removed ${deletedUnusedCount} unused images.`);
}

run();
