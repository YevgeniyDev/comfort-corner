"use client";

type StickerProps = {
  src: string; // pass .webm path (we derive .mp4)
  size?: number;
  className?: string;
  fit?: "contain" | "cover";
  nudgeX?: number; // px
  nudgeY?: number; // px
};

function toMp4(webmPath: string) {
  return webmPath.replace(/\.webm$/i, ".mp4");
}

export default function Sticker({
  src,
  size = 120,
  className = "",
  fit = "contain",
  nudgeX = 0,
  nudgeY = 0,
}: StickerProps) {
  const mp4 = toMp4(src);

  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full ${
          fit === "cover" ? "object-cover" : "object-contain"
        }`}
        style={{ transform: `translate(${nudgeX}px, ${nudgeY}px)` }}
      >
        {/* Safari / iOS WebView fallback first */}
        <source src={mp4} type="video/mp4" />
        {/* Chrome / Android */}
        <source src={src} type="video/webm" />
      </video>
    </div>
  );
}
