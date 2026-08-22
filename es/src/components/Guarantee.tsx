import type { MarketConfig } from "../config/types";

export function Guarantee({ config }: { config: MarketConfig }) {
  return (
    <section className="bg-primary-50/40 px-4 py-16">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 rounded-3xl border border-accent-500/30 bg-white p-8 text-center shadow-sm">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent-500/10 text-3xl">
          🛡️
        </span>
        <h2 className="text-2xl font-bold text-ink">{config.guarantee.title}</h2>
        <p className="text-ink-soft">{config.guarantee.text}</p>
      </div>
    </section>
  );
}
