import { useState } from "react";
import { Check, ArrowRight, Sparkles } from "lucide-react";

const q1 = ["Mascote / Personagem", "Figura Pública", "Peça Abstrata", "Outro"];
const q2 = ["Até 1 metro", "1 a 3 metros", "Gigante / Monumental"];
const q3 = ["Ambiente Interno", "Ambiente Externo (clima)"];

export function Simulator() {
  const [a1, setA1] = useState<string | null>(null);
  const [a2, setA2] = useState<string | null>(null);
  const [a3, setA3] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const ready = a1 && a2 && a3;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const Block = ({
    title,
    options,
    value,
    onChange,
    n,
  }: {
    title: string;
    options: string[];
    value: string | null;
    onChange: (v: string) => void;
    n: number;
  }) => (
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full border border-gold/40 text-xs font-bold text-gold">
          {n}
        </span>
        <h3 className="font-display text-xl md:text-2xl">{title}</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((opt) => {
          const active = value === opt;
          return (
            <button
              key={opt}
              type="button"
              onClick={() => onChange(opt)}
              className={`group flex items-center justify-between rounded-xl border px-5 py-4 text-left text-sm transition-all md:text-base ${
                active
                  ? "border-gold bg-gold/10 text-foreground shadow-gold"
                  : "border-border bg-card hover:border-gold/40 hover:bg-card/80"
              }`}
            >
              <span>{opt}</span>
              <Check
                className={`h-4 w-4 transition-opacity ${
                  active ? "text-gold opacity-100" : "opacity-0"
                }`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <section id="simulador" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-background to-background" />
      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Simulador de Projetos
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-6xl">
            Qual é a magnitude do{" "}
            <span className="italic text-gradient-gold">seu projeto?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Responda 3 perguntas rápidas e nosso diretor de arte entrará em
            contato com a viabilidade técnica.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 space-y-10 rounded-3xl border border-border bg-card/60 p-8 shadow-elevated backdrop-blur-sm md:p-12"
        >
          <Block n={1} title="O que você deseja criar?" options={q1} value={a1} onChange={setA1} />
          <Block n={2} title="Qual o tamanho estimado?" options={q2} value={a2} onChange={setA2} />
          <Block n={3} title="Onde ela vai ficar?" options={q3} value={a3} onChange={setA3} />

          <div
            className={`overflow-hidden transition-all duration-500 ${
              ready ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-border pt-8">
              {sent ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15">
                    <Sparkles className="h-6 w-6 text-gold" />
                  </div>
                  <h3 className="font-display text-2xl">Projeto enviado.</h3>
                  <p className="text-muted-foreground">
                    Nosso diretor de arte falará com você em até 24h úteis.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="mb-5 font-display text-xl">
                    Como entramos em contato?
                  </h3>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      required
                      placeholder="Seu nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="rounded-xl border border-border bg-background px-5 py-4 text-base outline-none focus:border-gold"
                    />
                    <input
                      required
                      placeholder="WhatsApp"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="rounded-xl border border-border bg-background px-5 py-4 text-base outline-none focus:border-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full gradient-gold px-8 py-5 text-sm font-bold tracking-wider text-primary-foreground shadow-gold transition-transform hover:scale-[1.01] md:text-base"
                  >
                    ENVIAR PARA ANÁLISE DOS ESPECIALISTAS
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
