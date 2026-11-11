import { describe, expect, it } from "vitest";
import { cdnImage } from "@/lib/image-cdn.ts";

const FILE = "https://hercules-cdn.com/file_abc123";

describe("cdnImage", () => {
  it("builds a resize URL with default quality", () => {
    expect(cdnImage(FILE, { w: 640 })).toBe("https://hercules-cdn.com/cdn-cgi/image/w=640,q=75,format=auto/file_abc123");
  });
  it("adds height and cover fit when h is given", () => {
    expect(cdnImage(FILE, { w: 528, h: 288, q: 60 })).toBe(
      "https://hercules-cdn.com/cdn-cgi/image/w=528,q=60,format=auto,h=288,fit=cover/file_abc123",
    );
  });
  it("leaves other hosts and already-resized URLs unchanged", () => {
    expect(cdnImage("https://example.com/a.jpg", { w: 100 })).toBe("https://example.com/a.jpg");
    const resized = "https://hercules-cdn.com/cdn-cgi/image/w=10/file_abc123";
    expect(cdnImage(resized, { w: 100 })).toBe(resized);
    expect(cdnImage("https://cdn.hercules.app/file_abc123", { w: 100 })).toBe("https://cdn.hercules.app/file_abc123");
  });
});
