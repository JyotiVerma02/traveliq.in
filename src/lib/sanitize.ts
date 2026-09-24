import sanitizeHtml from "sanitize-html";
import { duplicatePageDestination, SITE_URL } from "./site";

const allowedTags = [
  "a",
  "blockquote",
  "br",
  "caption",
  "code",
  "em",
  "figcaption",
  "figure",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hr",
  "img",
  "li",
  "ol",
  "p",
  "pre",
  "span",
  "strong",
  "table",
  "tbody",
  "td",
  "th",
  "thead",
  "tr",
  "ul",
];

export function sanitizeWordPressHtml(html: string) {
  return sanitizeHtml(html, {
    allowedTags,
    allowedAttributes: {
      a: ["href", "name", "target", "rel"],
      img: ["src", "alt", "width", "height", "loading"],
      "*": ["class"],
    },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowedSchemesByTag: {
      img: ["http", "https"],
    },
    transformTags: {
      a: (_tagName, attribs) => {
        let href = attribs.href || "";
        if (href.startsWith("/") || /^https?:\/\//i.test(href)) {
          try {
            const url = new URL(href, SITE_URL);
            const destination = duplicatePageDestination(url.pathname);
            if (url.origin === SITE_URL && destination) {
              href = `${destination}/${url.search}${url.hash}`;
            }
          } catch {
            // Leave malformed URLs to the sanitizer's normal handling.
          }
        }
        const isExternal = /^https?:\/\//i.test(href);

        return {
          tagName: "a",
          attribs: {
            ...attribs,
            href,
            ...(isExternal
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {}),
          },
        };
      },
    },
  });
}

export function escapeJsonLd(data: unknown) {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
