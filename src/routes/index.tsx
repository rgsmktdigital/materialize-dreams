import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sales/Hero";
import { TrustBar } from "@/components/sales/TrustBar";
import { ProblemSolution } from "@/components/sales/ProblemSolution";
import { Method } from "@/components/sales/Method";
import { Gallery } from "@/components/sales/Gallery";
import { Simulator } from "@/components/sales/Simulator";
import { FAQ } from "@/components/sales/FAQ";
import { About } from "@/components/sales/About";
import { FinalCTA } from "@/components/sales/FinalCTA";
import { Footer } from "@/components/sales/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FIBRAS — Esculturas em Fibra de Vidro Sob Encomenda" },
      {
        name: "description",
        content:
          "Esculturas, mascotes e monumentos em fibra de vidro, hiper-realistas e indestrutíveis. Da argila à pintura automotiva, feitas para durar décadas.",
      },
      { property: "og:title", content: "FIBRAS — Arte & Engenharia em Fibra de Vidro" },
      {
        property: "og:description",
        content:
          "Transformamos sua imaginação em monumentos eternos. Esculturas exclusivas para marcas, eventos e colecionadores.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Method />
      <Gallery />
      <Simulator />
      <FAQ />
      <About />
      <FinalCTA />
      <Footer />
    </main>
  );
}
