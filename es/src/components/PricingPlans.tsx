import type { MarketConfig } from "../config/types";

export function PricingPlans({ config }: { config: MarketConfig }) {
  return (
    <section id="planes" className="bg-primary-50/40 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold text-ink sm:text-3xl">
          Elige tu plan y empieza hoy mismo
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {config.plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-3xl border p-6 sm:p-8 ${
                plan.highlighted
                  ? "border-primary-500 bg-white shadow-xl shadow-primary-500/10"
                  : "border-primary-100 bg-white/70"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-bold text-white">
                  MÁS ELEGIDO
                </span>
              )}

              <h3 className="text-xl font-bold text-ink">{plan.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{plan.tagline}</p>

              <div className="mt-5 flex items-end gap-2">
                <span className="text-sm text-ink-soft line-through">{plan.anchoredPrice}</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-ink">{plan.price}</span>
                {plan.priceSuffix && <span className="text-sm text-ink-soft">{plan.priceSuffix}</span>}
              </div>

              <ul className="mt-6 flex-1 space-y-2.5 text-left text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-ink">
                    <span className="mt-0.5 text-accent-500">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.bonuses && (
                  <>
                    <li className="pt-2 text-xs font-bold uppercase tracking-wide text-primary-600">
                      + 6 bonus incluidos
                    </li>
                    {plan.bonuses.map((bonus) => (
                      <li key={bonus} className="flex items-start gap-2 text-ink">
                        <span className="mt-0.5 text-primary-500">★</span>
                        <span>{bonus}</span>
                      </li>
                    ))}
                  </>
                )}
              </ul>

              <a
                href={plan.checkoutUrl}
                className={`mt-8 block rounded-full px-6 py-3.5 text-center font-bold transition ${
                  plan.highlighted
                    ? "bg-primary-500 text-white hover:bg-primary-600"
                    : "bg-ink text-white hover:bg-ink/90"
                }`}
              >
                {plan.ctaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
