import type { MarketConfig } from "../config/types";

export function SocialProof({ config }: { config: MarketConfig }) {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold text-ink sm:text-3xl">
          Lo que dicen quienes ya la están usando
        </h2>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {config.testimonials.map((t) => (
            <div key={t.name} className="rounded-2xl border border-primary-100 bg-primary-50/30 p-5 text-left">
              <div className="text-gold-400">{"★".repeat(t.rating)}</div>
              <p className="mt-3 text-sm text-ink-soft">"{t.text}"</p>
              <p className="mt-4 text-sm font-bold text-ink">
                {t.name} <span className="font-normal text-ink-soft">· {t.location}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
