const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) return;

  const tempPath = filePath + '.tmp';
  const statsBefore = fs.statSync(filePath);
  const sizeKbBefore = (statsBefore.size / 1024).toFixed(1);

  try {
    const inputBuffer = fs.readFileSync(filePath);
    let pipeline = sharp(inputBuffer);
    const metadata = await pipeline.metadata();

    // Determine max dimension based on file type/use
    let maxDim = 1280;
    if (filePath.includes('services')) {
      maxDim = 800;
    } else if (filePath.includes('vande_bharat_hero')) {
      maxDim = 960;
    } else if (metadata.width > 1600) {
      maxDim = 1600;
    }

    if (metadata.width > maxDim || metadata.height > maxDim) {
      pipeline = pipeline.resize({
        width: metadata.width > metadata.height ? maxDim : null,
        height: metadata.height >= metadata.width ? maxDim : null,
        withoutEnlargement: true,
      });
    }

    const q = filePath.includes('vande_bharat_hero') ? 68 : 75;
    let buffer;
    if (ext === '.png') {
      buffer = await pipeline.png({ quality: 80, compressionLevel: 9 }).toBuffer();
    } else if (ext === '.webp') {
      buffer = await pipeline.webp({ quality: q }).toBuffer();
    } else {
      buffer = await pipeline.jpeg({ quality: q, mozjpeg: true, progressive: true }).toBuffer();
    }

    const sizeKbAfter = (buffer.length / 1024).toFixed(1);

    if (buffer.length < statsBefore.size) {
      fs.writeFileSync(filePath, buffer);
      console.log(`Optimized ${path.relative(process.cwd(), filePath)}: ${sizeKbBefore} KB -> ${sizeKbAfter} KB`);
    } else {
      console.log(`Skipped ${path.relative(process.cwd(), filePath)}: already optimal (${sizeKbBefore} KB)`);
    }
  } catch (err) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    console.error(`Error processing ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      await walkDir(fullPath);
    } else {
      await processImage(fullPath);
    }
  }
}

async function run() {
  console.log('Starting image optimization...');
  const publicDir = path.join(__dirname, '..', 'public');
  await walkDir(publicDir);
}

run();
