"use client";

import { useState } from "react";

export default function RevealNote({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setOpen((v) => !v)}
      className="w-full rounded-3xl border border-pink-200 bg-white/70 px-5 py-4 text-left shadow-sm transition hover:bg-white/90"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="font-semibold">{title}</div>
        <div className="text-sm opacity-70">{open ? "скрыть" : "показать"}</div>
      </div>

      <div
        className={`grid transition-all ${
          open ? "grid-rows-[1fr] mt-3" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="rounded-2xl bg-pink-50 px-4 py-3 leading-relaxed">
            {note}
          </div>
        </div>
      </div>
    </button>
  );
}
