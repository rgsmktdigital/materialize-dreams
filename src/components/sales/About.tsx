import about from "@/assets/about-team.jpg";

export function About() {
  return (
    <section className="bg-card/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="relative overflow-hidden rounded-2xl shadow-elevated">
          <img
            src={about}
            alt="Equipe FIBRAS DE VIDRO trabalhando no galpão entre esculturas e estruturas industriais"
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Sobre Nós
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            FIBRAS DE VIDRO.
            <br />
            <span className="italic text-gradient-gold">
              A intersecção perfeita
            </span>{" "}
            entre Arte e Engenharia.
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>
              Reunimos o dom extraordinário de artistas passionais respaldados
              por décadas de técnica industrial. Nossos mestres esculpem como se
              fossem renascentistas — e finalizam como uma engenharia de ponta.
            </p>
            <p>
              <span className="text-foreground">
                A mesma precisão que usamos para construir cascos náuticos e
                motorhomes,
              </span>{" "}
              nós aplicamos para proteger a sua arte. É essa dualidade que faz
              cada obra durar décadas, em qualquer clima, em qualquer escala.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "20+", l: "anos de ofício" },
              { n: "500+", l: "obras entregues" },
              { n: "100%", l: "feito à mão" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-3xl text-gradient-gold md:text-4xl">
                  {s.n}
                </p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
