import clay from "@/assets/process-clay.jpg";
import mold from "@/assets/process-mold.jpg";
import fiber from "@/assets/process-fiber.jpg";
import paint from "@/assets/process-paint.jpg";

const steps = [
  {
    n: "01",
    label: "A Alma",
    title: "A Argila",
    text: "Tudo começa nas mãos dos nossos mestres. Cada curva, expressão e proporção é esculpida artesanalmente com precisão cirúrgica.",
    img: clay,
  },
  {
    n: "02",
    label: "O DNA",
    title: "A Modelagem",
    text: "Capturamos o molde perfeito, garantindo que nenhum milímetro de detalhe seja perdido na transição.",
    img: mold,
  },
  {
    n: "03",
    label: "O Corpo",
    title: "A Fibra de Vidro",
    text: "A injeção da fibra de vidro traz a estrutura resistente, leve e feita para durar décadas em qualquer ambiente.",
    img: fiber,
  },
  {
    n: "04",
    label: "A Vida",
    title: "Pintura e Acabamento",
    text: "Pintura automotiva e artística de alta durabilidade que dá fôlego e hiper-realismo à obra finalizada.",
    img: paint,
  },
];

export function Method() {
  return (
    <section className="relative bg-card/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            O Método Gênesis
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Da Argila Bruta à Fibra{" "}
            <span className="italic text-gradient-gold">Indestrutível.</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Quatro etapas obsessivas que separam uma escultura comum de uma
            obra-prima feita para durar gerações.
          </p>
        </div>

        <div className="mt-20 space-y-16 md:space-y-24">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                <img
                  src={s.img}
                  alt={`Etapa ${s.n}: ${s.title}`}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute left-6 top-6 rounded-full border border-gold/40 bg-background/70 px-4 py-1.5 text-xs font-bold tracking-widest text-gold backdrop-blur-sm">
                  ETAPA {s.n}
                </div>
              </div>
              <div>
                <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-gold uppercase">
                  {s.label}
                </p>
                <h3 className="font-display text-4xl md:text-5xl">
                  {s.title}
                </h3>
                <div className="my-6 h-px w-16 bg-gold/60" />
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
