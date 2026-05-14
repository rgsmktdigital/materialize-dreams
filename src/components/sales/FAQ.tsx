import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Vocês conseguem fazer exatamente igual ao meu desenho/ideia?",
    a: "Sim. A modelagem inicial em argila nos permite aprovar cada detalhe com você antes da aprovação final para ir para a fibra.",
  },
  {
    q: "Quanto tempo leva a produção?",
    a: "Sendo uma obra de arte exclusiva aliada a processos industriais, os prazos variam conforme a escala e o nível de detalhe — geralmente entre 30 e 90 dias.",
  },
  {
    q: "A peça pode ficar no tempo (chuva/sol)?",
    a: "Perfeitamente. Utilizamos as mesmas resinas e tintas de alta performance da indústria náutica e automotiva, com proteção UV e resistência marítima.",
  },
  {
    q: "Como é feito o envio?",
    a: "Entregamos a arte embalada, protegida e pronta para instalação em todo o Brasil — e para o mundo, quando aplicável, com documentação de exportação.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 md:px-10">
        <div className="text-center">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-gold uppercase">
            Quebra de Objeções
          </p>
          <h2 className="font-display text-4xl leading-tight md:text-5xl">
            Clareza absoluta antes de{" "}
            <span className="italic text-gradient-gold">começarmos.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`i-${i}`}
              className="rounded-xl border border-border bg-card px-6 data-[state=open]:border-gold/50"
            >
              <AccordionTrigger className="py-5 text-left font-display text-lg hover:no-underline md:text-xl">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
