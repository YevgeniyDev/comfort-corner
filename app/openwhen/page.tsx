import Link from "next/link";
import PinkShell from "@/components/PinkShell";
import Sticker from "@/components/Sticker";
import { openCards } from "@/lib/content";
import { STICKERS } from "@/lib/stickers";

function stickerForSlug(slug: string) {
  const map: Record<string, string> = {
    sad: STICKERS.sad,
    guilt: STICKERS.guilt,
    overthinking: STICKERS.overthinking,
    angry: STICKERS.angry,
    support: STICKERS.support,
    sleep: STICKERS.sleep,
    anxiety: STICKERS.anxiety,
    overwhelmed: STICKERS.overwhelmed,
    miss: STICKERS.miss,
    noenergy: STICKERS.noenergy,
  };
  return map[slug] ?? STICKERS.cuteHi;
}

export default function OpenWhenPage() {
  return (
    <PinkShell backHref="/">
      {/* Section title */}
      <div className="mb-3">
        <div className="sm:hidden">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-extrabold">Открой, когда…</h2>

            <div className="flex items-center gap-2 text-xs opacity-60">
              <Sticker src={STICKERS.cuteHi} size={32} className="opacity-80" />
              <span>нажми на карточку</span>
            </div>
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden sm:flex items-end justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-extrabold">Открой, когда…</h2>
            <span className="opacity-60">🐾</span>
          </div>

          <div className="flex items-center gap-2 text-xs opacity-60">
            <Sticker src={STICKERS.cuteHi} size={34} />
            <span>нажми на карточку</span>
          </div>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        {openCards.map((c) => (
          <Link
            key={c.slug}
            href={`/open/${c.slug}`}
            className="group relative overflow-hidden rounded-[26px] border border-pink-200 bg-white/70 shadow-sm transition active:scale-[0.995] hover:bg-white/90"
          >
            {/* MOBILE ROW LAYOUT */}
            <div className="flex items-start gap-3 p-4 sm:hidden">
              {/* bigger sticker bubble on mobile */}
              <div className="grid h-[64px] w-[64px] place-items-center overflow-hidden rounded-[20px] border border-pink-200 bg-gradient-to-b from-pink-50 to-white/70 shadow-sm p-1">
                <Sticker
                  src={stickerForSlug(c.slug)}
                  size={60}
                  fit="cover"
                  className="popIn"
                  nudgeX={-3}
                  nudgeY={-3}
                />
              </div>

              <div className="min-w-0">
                <div className="text-[16px] font-extrabold leading-snug">
                  {c.title}
                </div>
                <div className="mt-1 text-[13px] leading-relaxed opacity-75">
                  {c.subtitle}
                </div>

                <div className="mt-3 inline-flex items-center gap-2 text-[12px] font-semibold opacity-60 group-hover:opacity-90">
                  <span>нажми на карточку</span>
                  <span>→</span>
                </div>
              </div>
            </div>

            {/* DESKTOP CARD LAYOUT (your current style, refined) */}
            <div className="hidden sm:block p-5">
              <div className="absolute right-3 top-3">
                <div className="grid h-[60px] w-[60px] place-items-center overflow-hidden rounded-[18px] border border-pink-200 bg-gradient-to-b from-pink-50 to-white/70 shadow-sm p-1">
                  <Sticker
                    src={stickerForSlug(c.slug)}
                    size={56}
                    fit="cover"
                    className="group-hover:floaty"
                    nudgeX={-3}
                    nudgeY={-3}
                  />
                </div>
              </div>

              <div className="pr-[86px]">
                <div className="text-lg font-extrabold leading-snug">
                  {c.title}
                </div>
                <div className="mt-1 text-sm leading-relaxed opacity-75">
                  {c.subtitle}
                </div>
              </div>

              <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold opacity-60 group-hover:opacity-90">
                <span>нажми на карточку</span>
                <span>→</span>
              </div>
            </div>

            {/* Decorative blush */}
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-24 w-24 rounded-full bg-pink-200/35 blur-2xl" />
          </Link>
        ))}
      </div>
    </PinkShell>
  );
}

