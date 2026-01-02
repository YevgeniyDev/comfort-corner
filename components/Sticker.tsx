"use client";

type StickerProps = {
  src: string;
  size?: number;
  className?: string;
  fit?: "contain" | "cover";
  nudgeX?: number; // px
  nudgeY?: number; // px
};

export default function Sticker({
  src,
  size = 120,
  className = "",
  fit = "contain",
  nudgeX = 0,
  nudgeY = 0,
}: StickerProps) {
  return (
    <div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
    >
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full ${
          fit === "cover" ? "object-cover" : "object-contain"
        }`}
        style={{ transform: `translateX(${nudgeX}px) translateY(${nudgeY}px)` }}
      />
    </div>
  );
}
