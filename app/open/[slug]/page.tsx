import Link from "next/link";
import PinkShell from "@/components/PinkShell";
import RevealNote from "@/components/RevealNote";
import CalmBox from "@/components/CalmBox";
import Sticker from "@/components/Sticker";
import { openCards } from "@/lib/content";
import { STICKERS } from "@/lib/stickers";
import { notFound } from "next/navigation";

type Params = Promise<{ slug: string }>;

function stickerForSlug(slug: string) {
  const map: Record<string, string> = {
    sad: STICKERS.sadNot,
    guilt: STICKERS.guiltNot,
    overthinking: STICKERS.overthinkingNot,
    angry: STICKERS.angryNot,
    support: STICKERS.supportNot,
    sleep: STICKERS.sleepNot,
    anxiety: STICKERS.anxietyNot,
    overwhelmed: STICKERS.overwhelmedNot,
    miss: STICKERS.missNot,
    noenergy: STICKERS.noenergyNot,
  };
  return map[slug] ?? STICKERS.cuteHi;
}

export default async function OpenCardPage({ params }: { params: Params }) {
  const { slug } = await params;

  const card = openCards.find((c) => c.slug === slug);
  if (!card) return notFound();

  return (
    <PinkShell backHref="/">
      <div className="mb-4 flex items-start gap-3">
        <div className="grid h-[64px] w-[64px] place-items-center overflow-hidden rounded-[20px] border border-pink-200 bg-gradient-to-b from-pink-50 to-white/70 shadow-sm p-1">
          <Sticker
            src={stickerForSlug(card.slug)}
            size={60}
            fit="cover"
            className="popIn"
            nudgeX={-2}
            nudgeY={-2}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h1 className="text-2xl font-extrabold leading-snug">{card.title}</h1>
        </div>
      </div>

      <div className="rounded-3xl border border-pink-200 bg-white/70 p-6 shadow-sm">
        <ul className="space-y-3 leading-relaxed">
          {card.lines.map((l, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-1">🌸</span>
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 grid gap-4">
        <RevealNote title={card.revealTitle} note={card.revealNote} />
        <CalmBox title={card.calm.title} steps={card.calm.steps} />
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href="/notes"
          className="rounded-2xl border border-pink-200 bg-pink-50 px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white"
        >
          Коробка с записками ✨
        </Link>
        <Link
          href="/ready"
          className="rounded-2xl border border-pink-200 bg-white/70 px-4 py-2 text-sm font-semibold shadow-sm transition hover:bg-white/90"
        >
          Когда ты будешь готова →
        </Link>
      </div>
    </PinkShell>
  );
}
