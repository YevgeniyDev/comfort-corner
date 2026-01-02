"use client";

import Link from "next/link";
import Image from "next/image";
import icon from "@/app/icon.png";
import { useRouter } from "next/navigation";

export default function PinkShell({
  children,
  backHref,
}: {
  children: React.ReactNode;
  backHref?: string;
}) {
  const router = useRouter();

  return (
    <div className="mx-auto max-w-3xl px-5 py-10">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="h-20 w-24 sm:w-20 rounded-2xl border border-pink-200 bg-white/80 shadow-sm overflow-hidden">
            <Image
              src={icon}
              alt="Comfort Corner"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <div className="text-xl font-extrabold">Your comfort corner</div>
          </div>
        </div>

        {backHref ? (
          <button
            onClick={() => router.back()}
            className="rounded-2xl border border-pink-200 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white/90"
          >
            Назад
          </button>
        ) : (
          <Link
            href="/ready"
            className="rounded-2xl border border-pink-200 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white/90"
          >
            Завершить
          </Link>
        )}
      </header>

      {children}

      <footer className="mt-10 text-center text-xs opacity-60">
        С любовью от твоего Женечки 🩷
      </footer>
    </div>
  );
}
