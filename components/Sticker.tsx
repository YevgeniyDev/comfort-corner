"use client";

import { useMemo } from "react";

type StickerProps = {
  src: string; // pass .webm path
  size?: number;
  className?: string;
  fit?: "contain" | "cover";
  nudgeX?: number; // px
  nudgeY?: number; // px
};

function toMp4(webmPath: string) {
  return webmPath.replace(/\.webm$/i, ".mp4");
}
function toApng(webmPath: string) {
  return webmPath.replace(/\.webm$/i, ".apng");
}

function isIOSWebKit() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent || "";
  // iPhone/iPad Safari + Telegram/Instagram webviews (all WKWebView-ish)
  return /iPad|iPhone|iPod/.test(ua);
}

export default function Sticker({
  src,
  size = 120,
  className = "",
  fit = "contain",
  nudgeX = 0,
  nudgeY = 0,
}: StickerProps) {
  const mp4 = useMemo(() => toMp4(src), [src]);
  const apng = useMemo(() => toApng(src), [src]);

  const style = { transform: `translate(${nudgeX}px, ${nudgeY}px)` };
  const objectClass = fit === "cover" ? "object-cover" : "object-contain";

  // ✅ iOS: APNG keeps transparency AND animates
  if (isIOSWebKit()) {
    return (
      <div className={`relative ${className}`} style={{ width: size, height: size }}>
        <img
          src={apng}
          alt=""
          className={`absolute inset-0 h-full w-full ${objectClass}`}
          style={style}
          draggable={false}
        />
      </div>
    );
  }

  // ✅ everything else: video (webm preferred, mp4 fallback)
  return (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className={`absolute inset-0 h-full w-full ${objectClass}`}
        style={style}
      >
        <source src={src} type="video/webm" />
        <source src={mp4} type="video/mp4" />
      </video>
    </div>
  );
}
