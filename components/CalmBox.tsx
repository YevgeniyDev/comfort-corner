export default function CalmBox({
  title,
  steps,
}: {
  title: string;
  steps: string[];
}) {
  return (
    <div className="rounded-3xl border border-pink-200 bg-white/70 p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-xl">🌷</span>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <ol className="list-decimal space-y-2 pl-5 leading-relaxed">
        {steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ol>
    </div>
  );
}
