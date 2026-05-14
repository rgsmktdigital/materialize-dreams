import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

const works = [
  { src: g1, label: "Mascote 8m — Parque Temático", h: "row-span-2" },
  { src: g2, label: "Figura Histórica 2.1m — Hiper-realismo", h: "" },
  { src: g4, label: "Monumento 6m — Pintura Automotiva", h: "" },
  { src: g3, label: "Mascote Corporativo 4m — Showroom", h: "row-span-2" },
  { src: g6, label: "Personagem 2.5m — Edição Limitada", h: "" },
  { src: g5, label: "Escultura Abstrata — Galeria Privada", h: "" },
];

export function Gallery() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Portfólio
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Nosso acervo de{" "}
            <span className="italic text-gradient-gold">
              impossíveis realizados.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid auto-rows-[260px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {works.map((w, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl bg-card ${w.h}`}
            >
              <img
                src={w.src}
                alt={w.label}
                className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-50"
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 translate-y-full p-6 transition-transform duration-500 group-hover:translate-y-0">
                <span className="inline-block rounded-full border border-gold/40 bg-background/70 px-4 py-1.5 text-xs font-semibold tracking-wider text-gold backdrop-blur-sm">
                  {w.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
