import type { MarketConfig } from "../config/types";

export function Hero({ config }: { config: MarketConfig }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-cream px-4 pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-700">
          {config.hero.eyebrow}
        </span>

        <h1 className="text-balance mt-6 text-3xl font-bold leading-tight text-ink sm:text-5xl">
          {config.hero.headline}
        </h1>

        <p className="text-balance mx-auto mt-5 max-w-2xl text-lg text-ink-soft sm:text-xl">
          {config.hero.subheadline}
        </p>

        <div className="mt-8 flex flex-col items-center gap-4">
          <a
            href="#planes"
            className="w-full max-w-sm rounded-full bg-primary-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary-500/30 transition hover:bg-primary-600 sm:w-auto"
          >
            {config.hero.ctaLabel} →
          </a>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm font-medium text-ink-soft">
            {config.hero.trustBadges.map((badge) => (
              <span key={badge} className="inline-flex items-center gap-1.5">
                <span className="text-accent-500">✓</span> {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
