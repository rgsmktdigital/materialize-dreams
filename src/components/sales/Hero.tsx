import heroBg from "@/assets/hero-bg.jpg";
import { Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Mãos do escultor moldando uma peça em argila sob iluminação cinematográfica"
          className="h-full w-full object-cover animate-ken-burns"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 md:px-10">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-background/40 px-4 py-1.5 backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            <span className="text-xs font-medium tracking-widest text-gold uppercase">
              Atelier de Esculturas em Fibra
            </span>
          </div>

          <h1 className="font-display text-5xl leading-[1.02] text-foreground md:text-7xl lg:text-[5.5rem]">
            Transformamos a sua{" "}
            <span className="italic text-gradient-gold">imaginação</span> em
            monumentos eternos.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Do primeiro traço na argila à resistência inabalável da fibra de
            vidro. Criamos esculturas, personagens e peças artísticas
            exclusivas em qualquer escala para marcas, eventos e colecionadores
            que exigem a perfeição.
          </p>

          <div className="mt-10 flex flex-col items-start gap-4">
            <a
              href="#simulador"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full gradient-gold px-8 py-5 text-base font-semibold text-primary-foreground shadow-gold transition-transform hover:scale-[1.02] md:text-lg"
            >
              <span className="text-xl">⚡</span>
              MATERIALIZAR MEU PROJETO
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
            </a>
            <p className="text-sm text-muted-foreground">
              Atendimento direto com nossos mestres artesãos.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 veil-bottom" />
    </section>
  );
}
