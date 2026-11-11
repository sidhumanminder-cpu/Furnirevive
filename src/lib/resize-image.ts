export const MAX_IMAGE_SIDE = 1400;
const WEBP_QUALITY = 0.8;

/** Target size that fits within maxSide on the longest side, keeping aspect ratio. Never upscales. */
export function fitWithin(width: number, height: number, maxSide: number = MAX_IMAGE_SIDE) {
  const longest = Math.max(width, height);
  if (longest <= maxSide) return { width, height, resized: false };
  const scale = maxSide / longest;
  return { width: Math.round(width * scale), height: Math.round(height * scale), resized: true };
}

export type ResizeResult = { file: File; originalBytes: number; newBytes: number; changed: boolean };

function toBlob(canvas: HTMLCanvasElement, type: string, quality: number): Promise<Blob | null> {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

function loadBitmap(file: File): Promise<ImageBitmap> {
  return createImageBitmap(file);
}

/**
 * Downscales an image in the browser (longest side <= 1400 px) and re-encodes it as WebP at 0.8,
 * falling back to JPEG when the browser cannot encode WebP. Small images that are already within the
 * limit and no larger than the re-encode would be are returned unchanged.
 */
export async function resizeImageFile(file: File, maxSide: number = MAX_IMAGE_SIDE): Promise<ResizeResult> {
  const unchanged: ResizeResult = { file, originalBytes: file.size, newBytes: file.size, changed: false };
  const bitmap = await loadBitmap(file);
  const target = fitWithin(bitmap.width, bitmap.height, maxSide);
  const canvas = document.createElement("canvas");
  canvas.width = target.width;
  canvas.height = target.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return unchanged;
  ctx.drawImage(bitmap, 0, 0, target.width, target.height);
  bitmap.close();

  // Browsers silently fall back to PNG when WebP is unsupported, so check the returned type.
  let blob = await toBlob(canvas, "image/webp", WEBP_QUALITY);
  if (!blob || blob.type !== "image/webp") blob = await toBlob(canvas, "image/jpeg", WEBP_QUALITY);
  if (!blob) return unchanged;

  // Keep the original when it is already small and re-encoding would not shrink it.
  if (!target.resized && blob.size >= file.size) return unchanged;

  const ext = blob.type === "image/webp" ? "webp" : "jpg";
  const name = `${file.name.replace(/\.[^.]+$/, "")}.${ext}`;
  const out = new File([blob], name, { type: blob.type });
  return { file: out, originalBytes: file.size, newBytes: out.size, changed: true };
}

export function formatBytes(bytes: number): string {
  return bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} kB`;
}
