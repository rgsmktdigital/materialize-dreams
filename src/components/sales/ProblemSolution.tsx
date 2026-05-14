import { Eye, Shield, Feather } from "lucide-react";

const items = [
  {
    icon: Eye,
    title: "Fidelidade Fotográfica",
    text: "Nossos escultores possuem o dom extraordinário de replicar expressões exatas, texturas e detalhes milimétricos.",
  },
  {
    icon: Shield,
    title: "Resistência Absoluta",
    text: "Obras feitas para resistir ao sol, chuva, ventos e ao toque do público em grandes eventos.",
  },
  {
    icon: Feather,
    title: "Leveza Logística",
    text: "O impacto de um monumento de pedra, com a leveza estrutural que permite transporte e instalação fácil em qualquer lugar.",
  },
];

export function ProblemSolution() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            O Padrão FIBRAS
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            O mundo real exige mais do que apenas{" "}
            <span className="italic text-gradient-gold">"beleza".</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Projetos artísticos comuns quebram, desbotam com o tempo ou não
            suportam o transporte. A verdadeira arte precisa de engenharia.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <div
                key={it.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all hover:border-gold/50 hover:-translate-y-1"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gold/5 blur-2xl transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/5">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="mb-2 text-xs font-bold tracking-widest text-gold/70">
                    0{i + 1}
                  </p>
                  <h3 className="font-display text-2xl text-foreground">
                    {it.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {it.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
