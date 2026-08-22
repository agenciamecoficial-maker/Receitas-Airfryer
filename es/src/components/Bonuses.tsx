import type { MarketConfig } from "../config/types";

export function Bonuses({ config }: { config: MarketConfig }) {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-balance text-center text-2xl font-bold text-ink sm:text-3xl">
          Y si eliges la versión Premium, te llevas estos 6 bonus
        </h2>

        <div className="mt-10 space-y-4">
          {config.bonuses.map((bonus, i) => (
            <div
              key={bonus.title}
              className="flex items-center gap-4 rounded-2xl border border-primary-100 bg-primary-50/40 p-5"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-primary-500 text-lg font-bold text-white">
                {i + 1}
              </span>
              <span className="text-2xl">{bonus.emoji}</span>
              <div className="flex-1 text-left">
                <p className="font-bold text-ink">{bonus.title}</p>
                <p className="text-sm text-ink-soft">{bonus.description}</p>
              </div>
              <div className="flex-none text-right">
                <p className="text-xs text-ink-soft line-through">{bonus.anchoredValue}</p>
                <p className="text-sm font-bold text-accent-600">Gratis hoy</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
