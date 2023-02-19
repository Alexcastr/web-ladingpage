import {
  About,
  FeaturesList,
  Footer,
  Home,
  Layout,
  PricingCard,
} from "@/components";

export default function HomePage() {
  return (
    <Layout title="Cursos de desarrollo y tecnología básica">
      <Home />
      <FeaturesList />
      <About />
      <PricingCard />
      <Footer />
    </Layout>
  );
}
