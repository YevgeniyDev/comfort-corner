"use client";

import { useEffect, useMemo, useState } from "react";
import PinkShell from "@/components/PinkShell";
import Image from "next/image";
import Sticker from "@/components/Sticker";
import { STICKERS } from "@/lib/stickers";

const memories = [
  { src: "/memories/01.jpg", caption: "Мы самая лучшая команда в мире 🥰" },
  { src: "/memories/02.jpg", caption: "Моя спящая принцесса 🤍" },
  { src: "/memories/03.png", caption: "Твоя улыбка - мое счастье" },
  {
    src: "/memories/04.png",
    caption:
      "Твои щечечки и губки самые миленькие когда ты грустишь. Но ты не всерьез только грусти 🥹",
  },
  {
    src: "/memories/05.jpg",
    caption: "Любое занятие - намного лучше когда ты рядом",
  },
  { src: "/memories/06.jpg", caption: "Ты - моя богиня 🩷" },
];

type Memory = (typeof memories)[number];

function MemoryCard({
  src,
  caption,
  priority = false,
  onOpen,
}: {
  src: string;
  caption: string;
  priority?: boolean;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="bounce-on-press group relative w-full overflow-hidden rounded-[26px] border border-pink-200 bg-white/70 shadow-sm text-left"
    >
      {/* image */}
      <div className="relative aspect-[4/5] w-full">
        <Image
          src={src}
          alt={caption}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      {/* caption chip */}
      <div className="absolute bottom-3 left-3 right-3">
        <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-pink-200 bg-white/80 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur">
          <span className="line-clamp-1">{caption}</span>
        </div>
      </div>

      {/* tiny sticker badge */}
      <div className="pointer-events-none absolute right-2 top-2 hidden sm:block">
        <div className="grid h-[42px] w-[42px] place-items-center overflow-hidden rounded-[16px] border border-pink-200 bg-white/70 p-1 shadow-sm">
          <Sticker
            src={STICKERS.cuteHi}
            size={36}
            fit="cover"
            className="opacity-90"
          />
        </div>
      </div>
    </button>
  );
}

function HeroMemory({
  memory,
  onOpen,
}: {
  memory: Memory;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="bounce-on-press group relative w-full overflow-hidden rounded-[26px] border border-pink-200 bg-white/70 shadow-sm text-left"
    >
      <div className="relative aspect-[16/10] w-full">
        <Image
          src={memory.src}
          alt={memory.caption}
          fill
          priority
          sizes="(max-width: 640px) 100vw, 66vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.01]"
        />
      </div>

      <div className="absolute bottom-3 left-3 right-3">
        <div className="inline-flex max-w-full items-center gap-2 rounded-2xl border border-pink-200 bg-white/80 px-3 py-2 text-xs font-semibold shadow-sm backdrop-blur">
          <span className="line-clamp-1">{memory.caption}</span>
        </div>
      </div>

      {/* subtle hint */}
      <div className="pointer-events-none absolute right-3 top-3 hidden sm:block text-xs font-semibold opacity-60">
        tap to view →
      </div>
    </button>
  );
}

function FullscreenViewer({
  items,
  index,
  onClose,
  onPrev,
  onNext,
}: {
  items: Memory[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const item = items[index];

  // esc to close + arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  // lock background scroll
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
    >
      {/* backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
        aria-label="Close"
      />

      {/* modal */}
      <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
        <div className="relative w-full max-w-3xl overflow-hidden rounded-[28px] border border-pink-200 bg-white/85 shadow-xl backdrop-blur">
          {/* top bar */}
          <div className="flex items-center justify-between gap-3 border-b border-pink-200/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="grid h-[44px] w-[44px] place-items-center overflow-hidden rounded-[16px] border border-pink-200 bg-white/70 p-1 shadow-sm">
                <Sticker
                  src={STICKERS.cuteHi}
                  size={38}
                  fit="cover"
                  className="opacity-90"
                />
              </div>
              <div className="text-sm font-extrabold">
                {index + 1} / {items.length}
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="bounce-on-press rounded-2xl border border-pink-200 bg-pink-50 px-3 py-2 text-sm font-bold shadow-sm transition hover:bg-white"
            >
              ✕
            </button>
          </div>

          {/* image area */}
          <div className="relative bg-pink-50/40">
            <div className="relative h-[62vh] w-full sm:h-[70vh]">
              <Image
                src={item.src}
                alt={item.caption}
                fill
                sizes="(max-width: 640px) 100vw, 900px"
                className="object-contain"
                priority
              />
            </div>

            {/* caption */}
            <div className="absolute bottom-3 left-3 right-3">
              <div className="rounded-2xl border border-pink-200 bg-white/85 px-4 py-3 text-sm font-semibold shadow-sm backdrop-blur">
                {item.caption}
              </div>
            </div>

            {/* nav buttons */}
            {items.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrev();
                  }}
                  className="bounce-on-press absolute left-3 top-1/2 -translate-y-1/2 rounded-2xl border border-pink-200 bg-white/80 px-3 py-2 text-sm font-bold shadow-sm backdrop-blur transition hover:bg-white"
                  aria-label="Previous photo"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onNext();
                  }}
                  className="bounce-on-press absolute right-3 top-1/2 -translate-y-1/2 rounded-2xl border border-pink-200 bg-white/80 px-3 py-2 text-sm font-bold shadow-sm backdrop-blur transition hover:bg-white"
                  aria-label="Next photo"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MemoriesPage() {
  const top = useMemo(() => memories.slice(0, 3), []);
  const rest = useMemo(() => memories.slice(3), []);

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open = (index: number) => setOpenIndex(index);
  const close = () => setOpenIndex(null);

  const prev = () => {
    if (openIndex == null) return;
    setOpenIndex((openIndex - 1 + memories.length) % memories.length);
  };
  const next = () => {
    if (openIndex == null) return;
    setOpenIndex((openIndex + 1) % memories.length);
  };

  return (
    <PinkShell backHref="/">
      <h1 className="text-2xl font-extrabold">Милые воспоминания 📸</h1>
      <p className="mt-2 opacity-80 leading-relaxed">
        Здесь - наши маленькие моменты. Просто мягко и тепло.
      </p>

      <div className="mt-5 rounded-3xl border border-pink-200 bg-white/70 p-5 shadow-sm">
        {/* header row */}
        <div className="mb-4 flex items-center gap-3">
          <div className="grid h-[54px] w-[54px] place-items-center overflow-hidden rounded-[18px] border border-pink-200 bg-gradient-to-b from-pink-50 to-white/70 p-1 shadow-sm">
            <Sticker
              src={STICKERS.celebrate}
              size={48}
              fit="cover"
              className="floatySlow"
            />
          </div>

          <div>
            <div className="text-sm font-extrabold">Наши воспоминания</div>
            <div className="mt-1 text-xs opacity-70">
              листай медленно, хорошо? 🩷
            </div>
          </div>
        </div>

        {memories.length > 0 ? (
          <>
            <div className="grid gap-3 sm:grid-cols-3">
              {/* hero */}
              <div className="sm:col-span-2">
                <HeroMemory memory={top[0]} onOpen={() => open(0)} />
              </div>

              {/* two small tiles */}
              <div className="grid gap-3">
                {top.slice(1).map((m, i) => (
                  <MemoryCard
                    key={m.src}
                    src={m.src}
                    caption={m.caption}
                    onOpen={() => open(i + 1)}
                  />
                ))}
              </div>
            </div>

            {rest.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {rest.map((m, i) => (
                  <MemoryCard
                    key={m.src}
                    src={m.src}
                    caption={m.caption}
                    onOpen={() => open(i + 3)}
                  />
                ))}
              </div>
            )}

            <div className="mt-4 text-center text-xs opacity-60">
              если захочешь - потом добавлю ещё 🫶
            </div>
          </>
        ) : (
          <div className="rounded-2xl bg-pink-50/70 px-4 py-4 text-sm opacity-75">
            Добавь 3–8 фото в{" "}
            <span className="font-semibold">/public/memories</span> и они
            появятся здесь.
          </div>
        )}
      </div>

      {openIndex != null && (
        <FullscreenViewer
          items={memories}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </PinkShell>
  );
}
