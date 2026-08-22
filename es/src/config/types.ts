export interface RecipeCategory {
  name: string;
  emoji: string;
}

export interface Bonus {
  title: string;
  description: string;
  anchoredValue: string;
  emoji: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  anchoredPrice: string;
  price: string;
  priceSuffix?: string;
  features: string[];
  bonuses?: string[];
  ctaLabel: string;
  checkoutUrl: string;
  highlighted?: boolean;
}

export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface MarketConfig {
  market: string;
  locale: string;
  currencySymbol: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaLabel: string;
    trustBadges: string[];
  };
  benefits: { title: string; emoji: string }[];
  recipeCategories: RecipeCategory[];
  bonuses: Bonus[];
  plans: PricingPlan[];
  testimonials: Testimonial[];
  guarantee: {
    title: string;
    text: string;
    days: number;
  };
  delivery: {
    title: string;
    items: { label: string; emoji: string }[];
  };
  faq: FaqItem[];
  footer: {
    disclaimer: string;
    support: string;
  };
}
