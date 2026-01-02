import Link from "next/link";
import PinkShell from "@/components/PinkShell";
import Sticker from "@/components/Sticker";
import { STICKERS } from "@/lib/stickers";

export default function Home() {
  return (
    <PinkShell>
      {/* HERO - mobile first */}
      <section className="relative mb-7 overflow-hidden rounded-[28px] border border-pink-200 bg-white/70 shadow-sm">
        {/* soft background decor */}
        <div className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 -bottom-10 h-44 w-44 rounded-full bg-fuchsia-200/30 blur-3xl" />

        <div className="relative p-5 sm:p-6">
          {/* ===== MOBILE ===== */}
          <div className="sm:hidden">
            {/* Row: sticker + heading */}
            <div className="flex items-start gap-3">
              <div className="shrink-0">
                <div className="grid h-[72px] w-[72px] place-items-center overflow-hidden rounded-[22px] border border-pink-200 bg-gradient-to-b from-pink-50 to-white/70 shadow-sm p-1">
                  <Sticker
                    src={STICKERS.headerCorner}
                    size={68}
                    fit="cover"
                    className="popIn"
                  />
                </div>
              </div>

              <h1 className="pt-1 text-[22px] font-extrabold leading-tight">
                Привет, мое солнышко 🩷
              </h1>
            </div>

            {/* Text under the row */}
            <p className="mt-3 text-[14px] leading-relaxed opacity-80">
              Я сделал тебе маленький уютный уголок, где ты можешь просто быть.
              Никаких требований, никаких вопросов, никаких «ответь правильно».
              Просто тёплое место, которое ты можешь смотреть, когда тебе
              трудно, но ты не хочешь об этом говорить.
            </p>
          </div>

          {/* ===== DESKTOP (unchanged) ===== */}
          <div className="hidden sm:flex items-start gap-4">
            <div className="shrink-0">
              <div className="grid h-[84px] w-[84px] place-items-center overflow-hidden rounded-[26px] border border-pink-200 bg-gradient-to-b from-pink-50 to-white/70 shadow-sm p-1">
                <Sticker
                  src={STICKERS.headerCorner}
                  size={80}
                  fit="cover"
                  className="popIn"
                />
              </div>
            </div>

            <div className="min-w-0">
              <h1 className="text-2xl font-extrabold leading-tight">
                Привет, мое солнышко 🩷
              </h1>
              <p className="mt-2 text-[15px] leading-relaxed opacity-80">
                Я сделал тебе маленький уютный уголок, где ты можешь просто
                быть. Никаких требований, никаких вопросов, никаких «ответь
                правильно». Просто тёплое место, которое ты можешь смотреть,
                когда тебе трудно, но ты не хочешь об этом говорить.
              </p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <Link
              href="/openwhen"
              className="inline-flex items-center justify-between rounded-2xl border border-pink-200 bg-pink-50 px-4 py-3 text-sm font-semibold shadow-sm transition active:scale-[0.99] hover:bg-white"
            >
              <span>Открой, когда… 🐾</span>
              <span className="opacity-60">→</span>
            </Link>

            <Link
              href="/notes"
              className="inline-flex items-center justify-between rounded-2xl border border-pink-200 bg-white/70 px-4 py-3 text-sm font-semibold shadow-sm transition active:scale-[0.99] hover:bg-white/90"
            >
              <span>Коробка с записками ✨</span>
              <span className="opacity-60">→</span>
            </Link>

            <Link
              href="/memories"
              className="inline-flex items-center justify-between rounded-2xl border border-pink-200 bg-white/70 px-4 py-3 text-sm font-semibold shadow-sm transition active:scale-[0.99] hover:bg-white/90"
            >
              <span>Милые воспоминания 📸</span>
              <span className="opacity-60">→</span>
            </Link>
          </div>
        </div>
      </section>
    </PinkShell>
  );
}
