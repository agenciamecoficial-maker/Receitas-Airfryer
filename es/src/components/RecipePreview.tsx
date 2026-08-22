import type { MarketConfig } from "../config/types";

export function RecipePreview({ config }: { config: MarketConfig }) {
  return (
    <section className="bg-primary-50/40 px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-balance text-center text-2xl font-bold text-ink sm:text-3xl">
          Recetas para cada momento del día
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-ink-soft">
          Un vistazo a las categorías que encontrarás dentro de la guía.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {config.recipeCategories.map((category) => (
            <div
              key={category.name}
              className="flex aspect-square flex-col items-center justify-center gap-2 rounded-2xl bg-white shadow-sm ring-1 ring-primary-100"
            >
              <span className="text-4xl">{category.emoji}</span>
              <span className="text-sm font-semibold text-ink">{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
