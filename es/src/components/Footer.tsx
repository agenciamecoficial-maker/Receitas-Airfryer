import type { MarketConfig } from "../config/types";

export function Footer({ config }: { config: MarketConfig }) {
  return (
    <footer className="bg-ink px-4 py-10 text-center text-sm text-white/70">
      <div className="mx-auto max-w-2xl space-y-2">
        <p>{config.footer.support}</p>
        <p className="text-xs text-white/50">{config.footer.disclaimer}</p>
      </div>
    </footer>
  );
}
