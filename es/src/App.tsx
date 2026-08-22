import { esConfig } from "./config/es.config";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { RecipePreview } from "./components/RecipePreview";
import { Bonuses } from "./components/Bonuses";
import { PricingPlans } from "./components/PricingPlans";
import { SocialProof } from "./components/SocialProof";
import { Guarantee } from "./components/Guarantee";
import { Delivery } from "./components/Delivery";
import { Faq } from "./components/Faq";
import { Footer } from "./components/Footer";

function App() {
  const config = esConfig;

  return (
    <div className="min-h-screen">
      <Hero config={config} />
      <Benefits config={config} />
      <RecipePreview config={config} />
      <Bonuses config={config} />
      <PricingPlans config={config} />
      <SocialProof config={config} />
      <Guarantee config={config} />
      <Delivery config={config} />
      <Faq config={config} />
      <Footer config={config} />
    </div>
  );
}

export default App;
