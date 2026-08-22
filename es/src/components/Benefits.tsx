import type { MarketConfig } from "../config/types";

export function Benefits({ config }: { config: MarketConfig }) {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold text-ink sm:text-3xl">
          Todo lo que vas a conseguir con esta guía
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {config.benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex items-start gap-4 rounded-2xl border border-primary-100 bg-primary-50/50 p-5"
            >
              <span className="text-2xl">{benefit.emoji}</span>
              <p className="text-left font-medium text-ink">{benefit.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
