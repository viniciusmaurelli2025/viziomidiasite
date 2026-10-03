import { Repeat, Eye, MapPin, Brain, Sparkles, SlidersHorizontal, ArrowUpRight } from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Repeat,
      number: "01",
      title: "ALTA RECORRÊNCIA",
      description:
        "Sua mensagem pode ser vista diversas vezes durante a rotina do público, fortalecendo a intimidade da marca com o dia a dia.",
    },
    {
      icon: Eye,
      number: "02",
      title: "ATENÇÃO NO AMBIENTE",
      description:
        "A mídia está presente no espaço físico onde a audiência está descansando, caminhando ou viajando — longe da pressa do scroll digital.",
    },
    {
      icon: MapPin,
      number: "03",
      title: "PRESENÇA ESTRATÉGICA",
      description:
        "Telas posicionadas criteriosamente em pontos obrigatórios de passagem, permanência prolongada e áreas comerciais de alta renda.",
    },
    {
      icon: Brain,
      number: "04",
      title: "FORÇA DE MEMÓRIA",
      description:
        "A repetição constante e programada da mensagem multiplica as oportunidades de lembrança na hora decisiva da compra.",
    },
    {
      icon: Sparkles,
      number: "05",
      title: "MÍDIA DIGITAL",
      description:
        "Comunicação visual em telas de altíssima definição, cores vivas, vídeos dinâmicos e trocas ágeis de campanha sem custos de impressão.",
    },
    {
      icon: SlidersHorizontal,
      number: "06",
      title: "FLEXIBILIDADE",
      description:
        "Formatos, tempos e planos desenhados para se adaptar perfeitamente aos objetivos de negócios e ao orçamento do anunciante.",
    },
  ];

  return (
    <section id="beneficios" className="relative py-28 bg-[#111111] border-t border-white/10 overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
                BENEFÍCIOS
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                VANTAGEM COMPETITIVA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-white max-w-2xl">
              Por que colocar sua marca na VIZIO?
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-400 max-w-md">
            Ambientes protegidos, audiência com poder de decisão e repetição inteligente
            para consolidar sua marca na mente do consumidor.
          </p>
        </div>

        {/* 6 Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b) => {
            const Icon = b.icon;
            return (
              <div
                key={b.title}
                className="group relative p-8 rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-[#FF5A1F] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-[#FF5A1F]/10 backdrop-blur-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-neutral-500 group-hover:text-[#FF5A1F] transition-colors">
                      {b.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-display text-white mb-2 group-hover:text-[#FF7A30] transition-colors">
                    {b.title}
                  </h3>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {b.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors">
                  <span className="font-mono">DOOH VIZIO</span>
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF5A1F]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
