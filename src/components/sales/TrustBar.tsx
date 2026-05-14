const clients = [
  "PARQUES TEMÁTICOS",
  "PREFEITURAS",
  "GRANDES MARCAS",
  "PRODUTORAS",
  "MUSEUS",
  "COLECIONADORES",
];

export function TrustBar() {
  return (
    <section className="border-y border-border/50 bg-card/40 py-10">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <p className="mb-8 text-center text-sm tracking-[0.3em] text-muted-foreground uppercase">
          O impacto visual escolhido por quem não aceita o comum
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
          {clients.map((c) => (
            <span
              key={c}
              className="text-xs font-bold tracking-[0.25em] text-muted-foreground md:text-sm"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
