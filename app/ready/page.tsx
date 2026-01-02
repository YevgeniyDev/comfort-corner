import Link from "next/link";
import PinkShell from "@/components/PinkShell";
import Sticker from "@/components/Sticker";
import { STICKERS } from "@/lib/stickers";

export default function ReadyPage() {
  return (
    <PinkShell backHref="/">
      <div className="rounded-3xl border border-pink-200 bg-white/70 p-7 shadow-sm">
        <div className="flex items-center gap-3">
          <Sticker src={STICKERS.celebrate} size={50} />
          <h1 className="text-2xl font-extrabold">No rush, okay? 🩷</h1>
        </div>

        <p className="mt-5 leading-relaxed opacity-85">
          Ты не обязана отвечать на это или реагировать как-то особенно. Я
          просто хотел чтобы у тебя было такое маленькое теплое место для
          трудных моментов, когда тебе будет сложно или ты будешь чувствовать
          себя одиноко, и при этом не можешь или не хочешь говорить мне об этом.
        </p>
        <p className="mt-3 leading-relaxed opacity-85">
          Когда ты будешь готова - напиши мне и я буду просто слушать, вникать и
          поддерживать тебя. Быть тем самым идеальным парнем, которого ты
          достойна.
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href="https://t.me/Zhkd1kn"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-pink-200 bg-pink-50 px-5 py-3 font-bold shadow-sm transition hover:bg-white/90"
          >
            Написать Женечке 💬
          </a>
          <Link
            href="/"
            className="rounded-2xl border border-pink-200 bg-white/70 px-5 py-3 font-bold shadow-sm transition hover:bg-white"
          >
            Вернуться к карточкам 🐾
          </Link>
          <a
            href="https://www.youtube.com/results?search_query=cat+purring+sound+1+hour"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-pink-200 bg-white/70 px-5 py-3 font-bold shadow-sm transition hover:bg-white/90"
          >
            Мурлыканье котика 🎧
          </a>
        </div>
      </div>
    </PinkShell>
  );
}
