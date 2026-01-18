// Resolve API base URL. In development, Vite proxys /api to the backend.
// In production, the app usually calls the same origin or a relative path.
export const API_BASE = "";

/**
 * Resolve the image/file URL.
 * If it's a Cloudinary URL (starts with http), return as-is.
 * If it's a relative path (legacy/local), append the origin if needed.
 */
export function getImageUrl(path?: string) {
  if (!path) return "";
  if (/^https?:\/\//.test(path)) return path;

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  // Support runtime config if available for legacy local paths
  const runtimeBase = (globalThis as any).__RUNTIME_CONFIG__?.API_BASE;
  if (runtimeBase) return `${runtimeBase.replace(/\/$/, "")}${normalizedPath}`;

  // Default to relative path which works behind a proxy or on same-origin
  return normalizedPath;
}
