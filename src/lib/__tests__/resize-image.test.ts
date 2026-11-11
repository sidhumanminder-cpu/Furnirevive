import { afterEach, describe, expect, it, vi } from "vitest";
import { fitWithin, resizeImageFile } from "@/lib/resize-image.ts";

function mockBrowser(w: number, h: number, blobBytes: number, type = "image/webp") {
  const canvas = {
    width: 0, height: 0,
    getContext: () => ({ drawImage: () => undefined }),
    toBlob: (cb: (b: Blob | null) => void, t: string) => cb(new Blob([new Uint8Array(blobBytes)], { type: t === "image/webp" ? type : t })),
  };
  vi.stubGlobal("createImageBitmap", async () => ({ width: w, height: h, close: () => undefined }));
  vi.stubGlobal("document", { createElement: () => canvas });
  return { canvas };
}

afterEach(() => { vi.restoreAllMocks(); vi.unstubAllGlobals(); });

describe("fitWithin", () => {
  it("scales a large landscape image to 1400 on the long side, keeping the ratio", () => {
    expect(fitWithin(4000, 3000)).toEqual({ width: 1400, height: 1050, resized: true });
  });
  it("scales a large portrait image by its height", () => {
    expect(fitWithin(3000, 6000)).toEqual({ width: 700, height: 1400, resized: true });
  });
  it("never upscales a small image", () => {
    expect(fitWithin(800, 600)).toEqual({ width: 800, height: 600, resized: false });
  });
});

describe("resizeImageFile", () => {
  it("resizes and re-encodes a large image as WebP", async () => {
    const { canvas } = mockBrowser(4000, 3000, 200_000);
    const input = new File([new Uint8Array(2_000_000)], "big.png", { type: "image/png" });
    const res = await resizeImageFile(input);
    expect(res.changed).toBe(true);
    expect(res.file.type).toBe("image/webp");
    expect(res.file.name).toBe("big.webp");
    expect(res.newBytes).toBeLessThan(res.originalBytes);
    expect([canvas.width, canvas.height]).toEqual([1400, 1050]);
  });
  it("falls back to JPEG when WebP is not supported", async () => {
    mockBrowser(4000, 3000, 300_000, "image/png");
    const res = await resizeImageFile(new File([new Uint8Array(2_000_000)], "a.png", { type: "image/png" }));
    expect(res.file.type).toBe("image/jpeg");
    expect(res.file.name).toBe("a.jpg");
  });
  it("leaves a small image unchanged when re-encoding would not shrink it", async () => {
    mockBrowser(800, 600, 90_000);
    const input = new File([new Uint8Array(40_000)], "small.jpg", { type: "image/jpeg" });
    const res = await resizeImageFile(input);
    expect(res.changed).toBe(false);
    expect(res.file).toBe(input);
  });
});
