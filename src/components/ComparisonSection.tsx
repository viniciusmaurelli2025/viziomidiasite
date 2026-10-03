import { Bus, Monitor, CheckCircle2, ArrowUpRight } from "lucide-react";

interface ComparisonProps {
  onOpenLeadModal: (initialMedia?: string) => void;
}

export default function ComparisonSection({ onOpenLeadModal }: ComparisonProps) {
  const channels = [
    {
      id: "bus",
      icon: Bus,
      title: "VIZIO BUS | ABM",
      subtitle: "AUDIÊNCIA EM MOVIMENTO",
      description: "Ideal para marcas que buscam fixação profunda, retenção de atenção e proximidade com a rotina de moradores da Barra da Tijuca.",
      metrics: [
        "15 MIL+ passageiros todos os meses",
        "9 veículos executivos em circulação",
        "27 telas Full HD (3 telas por ônibus)",
        "15 a 120 minutos de tempo de permanência",
        "Até 12 ciclos contínuos de exibição",
      ],
      cta: "QUERO ANUNCIAR NO BUS",
      accent: "from-[#FF5A1F]/20 to-transparent",
    },
    {
      id: "mall",
      icon: Monitor,
      title: "VIZIO MALL | BARRA SQUARE",
      subtitle: "AUDIÊNCIA EM CIRCULAÇÃO",
      description: "Perfeito para negócios que querem impactar o cliente no ponto de compra, lazer, serviços e gastronomia com grande volume de impressões.",
      metrics: [
        "8 telas digitais estratégicas",
        "08h às 23h — 15 horas por dia no ar",
        "≈ 9.795 inserções no mês na rede",
        "30 dias de operação ininterrupta",
        "Telas de 32”, 43” e grande formato 58”",
      ],
      cta: "QUERO ANUNCIAR NO MALL",
      accent: "from-white/10 to-transparent",
    },
  ];

  return (
    <section id="audiencia" className="relative py-28 bg-[#181818] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
              VIZIO EM UM OLHAR
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-white">
            Escolha onde sua marca quer estar.
          </h2>

          <p className="text-sm sm:text-base text-neutral-400 mt-3">
            Combine os dois canais para uma presença onipresente na Barra da Tijuca
            ou escolha o formato ideal para o seu momento de campanha.
          </p>
        </div>

        {/* Two Large Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {channels.map((ch) => {
            const Icon = ch.icon;
            return (
              <div
                key={ch.id}
                className="relative rounded-3xl p-8 sm:p-10 bg-neutral-900/90 border border-white/15 hover:border-[#FF5A1F] transition-all duration-300 flex flex-col justify-between shadow-2xl group overflow-hidden"
              >
                {/* Subtle Gradient Backing */}
                <div
                  className={`absolute top-0 right-0 left-0 h-40 bg-gradient-to-b ${ch.accent} pointer-events-none opacity-60`}
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5A1F]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#FF5A1F] uppercase bg-[#FF5A1F]/10 px-3 py-1 rounded-full border border-[#FF5A1F]/20">
                      {ch.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white">
                    {ch.title}
                  </h3>

                  <p className="text-sm text-neutral-400 mt-3 leading-relaxed">
                    {ch.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/10 space-y-3.5">
                    {ch.metrics.map((m, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-200 font-medium">
                          {m}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-8 mt-8 border-t border-white/10">
                  <button
                    onClick={() => onOpenLeadModal(ch.id)}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#FF5A1F] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#FF7A30] active:scale-[0.99] transition-all cursor-pointer shadow-lg shadow-[#FF5A1F]/20"
                  >
                    <span>{ch.cta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
