import type { MarketConfig } from "./types";

export const esConfig: MarketConfig = {
  market: "ES",
  locale: "es-ES",
  currencySymbol: "€",
  hero: {
    eyebrow: "Guía digital · Acceso inmediato",
    headline:
      "Más de 200 Recetas Fáciles, Saludables y Deliciosas para Sacarle el Máximo Provecho a tu Freidora de Aire",
    subheadline:
      "Descubre cómo preparar platos increíbles todos los días sin perder tiempo, sin usar exceso de aceite y sin ensuciar tu cocina.",
    ctaLabel: "Quiero mis 200 recetas",
    trustBadges: ["Acceso inmediato", "Compra 100% segura", "Garantía de 15 días"],
  },
  benefits: [
    { title: "Recetas explicadas paso a paso con ingredientes sencillos del supermercado", emoji: "📝" },
    { title: "Opciones para desayunos, almuerzos, cenas, snacks y postres", emoji: "🍽️" },
    { title: "Tiempos y temperaturas exactas para que nada se te queme ni quede crudo", emoji: "⏱️" },
    { title: "Acceso inmediato en tu teléfono o tablet para consultar mientras cocinas", emoji: "📱" },
    { title: "Recetas pensadas para ensuciar lo mínimo tu freidora de aire", emoji: "✨" },
    { title: "Recetas para toda la familia, de los más pequeños a los mayores", emoji: "👨‍👩‍👧‍👦" },
  ],
  recipeCategories: [
    { name: "Desayunos", emoji: "🥐" },
    { name: "Panes y Masas", emoji: "🍞" },
    { name: "Almuerzos y Cenas", emoji: "🍗" },
    { name: "Snacks Saludables", emoji: "🥕" },
    { name: "Postres y Repostería", emoji: "🍰" },
    { name: "Sin Lactosa", emoji: "🌱" },
    { name: "Salsas", emoji: "🥣" },
    { name: "Bebidas", emoji: "🥤" },
  ],
  bonuses: [
    {
      emoji: "🛒",
      title: "Lista de la Compra Inteligente",
      description: "Organiza tus compras semanales sin olvidar ingredientes ni gastar de más.",
      anchoredValue: "9€",
    },
    {
      emoji: "📅",
      title: "Menú de 30 Días",
      description: "Un mes completo de comidas variadas, listas para seguir sin pensar qué cocinar.",
      anchoredValue: "12€",
    },
    {
      emoji: "❄️",
      title: "Guía de Congelación y Recalentado",
      description: "Cómo conservar tus platos y recalentarlos en la freidora sin que pierdan textura.",
      anchoredValue: "7€",
    },
    {
      emoji: "🧂",
      title: "30 Condimentos y Salsas Caseras",
      description: "Combinaciones para darle un giro distinto a cualquier receta en segundos.",
      anchoredValue: "8€",
    },
    {
      emoji: "⚡",
      title: "50 Recetas en 15 Minutos",
      description: "Para los días con prisa, sin renunciar a comer bien.",
      anchoredValue: "10€",
    },
    {
      emoji: "🕯️",
      title: "Cenas Románticas para Parejas",
      description: "Platos especiales para sorprender sin pasar horas en la cocina.",
      anchoredValue: "9€",
    },
  ],
  plans: [
    {
      id: "basica",
      name: "Básica",
      tagline: "Para empezar a sacarle partido a tu freidora ya",
      anchoredPrice: "20€",
      price: "6,90€",
      features: [
        "+200 recetas para freidora de aire",
        "Sumario clicable por categorías",
        "Optimizado para leer desde el móvil",
        "Acceso inmediato tras la compra",
      ],
      ctaLabel: "Quiero la Básica",
      checkoutUrl: "#checkout-basica",
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "Todo lo anterior + 6 bonus para no repetir plato en meses",
      anchoredPrice: "75€",
      price: "11,90€",
      features: [
        "+200 recetas para freidora de aire",
        "Sumario clicable por categorías",
        "Optimizado para leer desde el móvil",
        "Acceso inmediato tras la compra",
      ],
      bonuses: [
        "Lista de la Compra Inteligente",
        "Menú de 30 Días",
        "Guía de Congelación y Recalentado",
        "30 Condimentos y Salsas Caseras",
        "50 Recetas en 15 Minutos",
        "Cenas Románticas para Parejas",
      ],
      ctaLabel: "Quiero la Premium",
      checkoutUrl: "#checkout-premium",
      highlighted: true,
    },
  ],
  testimonials: [
    {
      name: "Carmen R.",
      location: "Madrid",
      rating: 5,
      text: "Llevaba meses usando la freidora solo para patatas. Con este recetario cambié la cena de toda la semana y mis hijos ya piden las croquetas de la receta 34.",
    },
    {
      name: "Laura M.",
      location: "Valencia",
      rating: 5,
      text: "Lo mejor es que las cantidades y los tiempos están explicados para no equivocarte. Se acabó quemar la cena.",
    },
    {
      name: "Isabel G.",
      location: "Sevilla",
      rating: 5,
      text: "Compré la versión Premium por el menú de 30 días y me ha ahorrado un montón de tiempo decidiendo qué cocinar cada día.",
    },
  ],
  guarantee: {
    title: "Garantía Incondicional de 15 Días",
    text:
      "Si por cualquier motivo no te convence, escríbenos dentro de los primeros 15 días y te devolvemos el 100% de tu dinero, sin preguntas.",
    days: 15,
  },
  delivery: {
    title: "¿Cómo lo recibo?",
    items: [
      { label: "En tu móvil", emoji: "📱" },
      { label: "En el ordenador", emoji: "💻" },
      { label: "Para imprimir", emoji: "🖨️" },
      { label: "Envío inmediato", emoji: "⚡" },
    ],
  },
  faq: [
    {
      question: "¿Las recetas funcionan en cualquier modelo de freidora de aire?",
      answer:
        "Sí. Las recetas indican tiempo y temperatura, así que funcionan en cualquier marca o modelo, ajustando ligeramente según la potencia de tu freidora.",
    },
    {
      question: "No tengo ni idea de cocinar, ¿me va a servir igualmente?",
      answer:
        "Sí, están explicadas paso a paso con ingredientes fáciles de encontrar en cualquier supermercado. No necesitas experiencia previa.",
    },
    {
      question: "¿Las recetas ensucian mucho la freidora?",
      answer:
        "La mayoría están pensadas para minimizar la limpieza, usando papel apto para freidora o poco aceite, así que no ensucian más que el uso habitual.",
    },
    {
      question: "¿Son recetas adaptadas al paladar español o son americanas?",
      answer:
        "Incluyen tanto clásicos de nuestra cocina (croquetas, tapas, tortilla) adaptados a la freidora de aire, como platos internacionales fáciles de preparar.",
    },
    {
      question: "¿Cómo recibo el material después de comprar?",
      answer:
        "Nada más completar el pago recibirás el enlace de descarga en la propia página y por correo electrónico, para acceder desde el móvil, tablet u ordenador.",
    },
    {
      question: "¿Qué diferencia hay entre la versión Básica y la Premium?",
      answer:
        "Ambas incluyen las +200 recetas. La Premium añade 6 bonus extra (menú de 30 días, lista de la compra, salsas, recetas rápidas y más) al mismo precio de lanzamiento.",
    },
  ],
  footer: {
    disclaimer:
      "Este producto es una guía digital en PDF. No incluye ningún electrodoméstico ni está afiliado a ninguna marca de freidoras de aire.",
    support: "¿Dudas? Escríbenos a soporte@recetasairfryer.es",
  },
};
