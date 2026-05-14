import finalImg from "@/assets/final-cta.jpg";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black py-32 md:py-40">
      <div className="absolute inset-0">
        <img
          src={finalImg}
          alt="Escultura em meia-luz contra fundo preto"
          className="h-full w-full object-cover opacity-70"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-10">
        <h2 className="font-display text-5xl leading-[1.05] text-white md:text-7xl lg:text-8xl">
          A sua ideia já existe.
          <br />
          <span className="italic text-gradient-gold">
            Ela só precisa ser materializada.
          </span>
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          Nossa agenda de produção para esculturas monumentais é limitada
          devido ao rigoroso processo artesanal. Fale com nossa equipe agora
          para reservar seu espaço na produção.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#simulador"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full gradient-gold px-10 py-6 text-base font-bold tracking-wider text-primary-foreground shadow-gold animate-pulse-gold md:text-lg"
          >
            <span className="text-xl">⚡</span>
            INICIAR MEU PROJETO EXCLUSIVO
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
          </a>
        </div>

        <p className="mt-8 text-xs tracking-[0.3em] text-white/40 uppercase">
          Vagas limitadas · Atendimento personalizado
        </p>
      </div>
    </section>
  );
}
