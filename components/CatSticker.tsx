export default function CatSticker({ emoji }: { emoji: string }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-full border border-pink-200 bg-white/80 px-3 py-1 text-xl shadow-sm"
      aria-label="cat mood"
      title="meow"
    >
      {emoji}
    </span>
  );
}
