"use client";

import { useMemo, useState } from "react";
import PinkShell from "@/components/PinkShell";
import Sticker from "@/components/Sticker";
import { appreciationNotes } from "@/lib/content";
import { STICKERS } from "@/lib/stickers";

export default function NotesPage() {
  const [current, setCurrent] = useState<string | null>(null);

  const pick = () => {
    const n =
      appreciationNotes[Math.floor(Math.random() * appreciationNotes.length)];
    setCurrent(n);
  };

  const all = useMemo(() => appreciationNotes, []);

  return (
    <PinkShell backHref="/">
      <h1 className="text-2xl font-extrabold">Коробка с записками ✨</h1>
      <p className="mt-2 opacity-80 leading-relaxed">
        Нажми на кнопку и я дам тебе записку с моей любовью, чувствами и
        поддержкой.
      </p>

      <div className="mt-5 rounded-3xl border border-pink-200 bg-white/70 p-6 shadow-sm">
        {/* Stickers instead of emojis */}
        <div className="flex items-center gap-3">
          <div className="grid h-[72px] w-[72px] place-items-center overflow-hidden rounded-[22px] border border-pink-200 bg-gradient-to-b from-pink-50 to-white/70 shadow-sm p-1">
            <Sticker src={STICKERS.jar} size={64} fit="cover" />
          </div>
          <p className="mt-2 opacity-80 leading-relaxed">
            It's me 'cooking' the notes for you 🩷
          </p>
        </div>

        {/* Button */}
        <button
          onClick={pick}
          className="bounce-on-press mt-5 flex items-center gap-2 rounded-2xl border border-pink-200 bg-pink-50 px-5 py-3 font-bold shadow-sm transition hover:bg-white active:scale-[0.98]"
        >
          <span>Получить записку</span>
          <Sticker
            src={STICKERS.jarTap}
            size={28}
            fit="cover"
            className="opacity-90"
          />
        </button>

        {/* Note */}
        <div className="mt-4 min-h-[90px] rounded-2xl bg-pink-50/70 px-4 py-3 leading-relaxed">
          {current ?? "…"}
        </div>
      </div>
    </PinkShell>
  );
}
