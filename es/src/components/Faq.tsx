import { useState } from "react";
import type { MarketConfig } from "../config/types";

export function Faq({ config }: { config: MarketConfig }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-primary-50/40 px-4 py-16">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-balance text-center text-2xl font-bold text-ink sm:text-3xl">
          Preguntas frecuentes
        </h2>

        <div className="mt-8 space-y-3">
          {config.faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.question} className="rounded-2xl border border-primary-100 bg-white">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-ink"
                >
                  {item.question}
                  <span className="flex-none text-primary-500">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="px-5 pb-5 text-sm text-ink-soft">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
