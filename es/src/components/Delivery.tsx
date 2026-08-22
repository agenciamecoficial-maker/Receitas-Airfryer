import type { MarketConfig } from "../config/types";

export function Delivery({ config }: { config: MarketConfig }) {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-balance text-2xl font-bold text-ink sm:text-3xl">{config.delivery.title}</h2>

        <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
          {config.delivery.items.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{item.emoji}</span>
              <span className="text-sm font-semibold text-ink">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
