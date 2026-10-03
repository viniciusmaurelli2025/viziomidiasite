import { useState } from "react";
import { MALL_SCREENS } from "../data/vizioData";
import { Monitor, Clock, PlaySquare, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

interface VizioMallSectionProps {
  onOpenLeadModal: (media?: string) => void;
}

export default function VizioMallSection({ onOpenLeadModal }: VizioMallSectionProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);

  const mallFrequencyStats = [
    { number: "326", label: "inserções por dia na rede", desc: "Fluxo contínuo" },
    { number: "54h", label: "de exposição por mês", desc: "Tempo de tela acumulado" },
    { number: "Até 20s", label: "por inserção de vídeo", desc: "Formatos dinâmicos" },
    { number: "30 dias", label: "de operação ininterrupta", desc: "Todos os dias da semana" },
  ];

  return (
    <section id="vizio-mall" className="relative py-28 bg-[#F4F1EC] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
                VIZIO MALL | BARRA SQUARE
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                SHOPPING & PONTO DE VENDA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-[#111111] max-w-2xl">
              Sua marca acompanha o caminho do cliente.
            </h2>
            <p className="text-lg text-neutral-700 mt-2 max-w-xl">
              8 telas digitais em pontos estratégicos do Shopping Barra Square, da entrada ao consumo.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal("mall")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF5A1F] transition-colors self-start md:self-end cursor-pointer shadow-lg"
          >
            <span>ANUNCIAR NO VIZIO MALL</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mall Hero Showcase Box */}
        <div className="rounded-3xl border border-neutral-300 bg-white p-6 sm:p-10 lg:p-12 shadow-xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Screen Preview */}
            <div className="lg:col-span-7">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-neutral-900 shadow-2xl border border-neutral-200 group">
                <img
                  src="/src/assets/images/vizio_mall_screens_1790989391706.jpg"
                  alt="Telas digitais no Barra Square Mall"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/20">
                    BARRA SQUARE · CIRCUITO DE TELAS
                  </span>
                  <span className="text-[#FF5A1F] font-bold">8 TELAS ATIVAS</span>
                </div>
              </div>
            </div>

            {/* Right Screen Inventory Selector */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold">
                  INVENTÁRIO ESTRATÉGICO DE TELAS
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-[#111111] mt-1">
                  Formatos de Alto Impacto
                </h3>
                <p className="text-sm text-neutral-600 mt-2">
                  Display vertical e horizontal posicionado nos principais eixos de circulação do shopping.
                </p>
              </div>

              {/* Screen formats list */}
              <div className="space-y-3">
                {MALL_SCREENS.map((screen, idx) => (
                  <div
                    key={screen.size}
                    onClick={() => setActiveScreenIndex(idx)}
                    className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      activeScreenIndex === idx
                        ? "bg-[#111111] text-white border-[#111111] shadow-md"
                        : "bg-neutral-50 border-neutral-200 text-neutral-700 hover:border-neutral-400"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-base font-extrabold font-display ${activeScreenIndex === idx ? "text-[#FF5A1F]" : "text-[#111111]"}`}>
                        {screen.size}
                      </span>
                      <span className="text-[11px] font-mono uppercase font-semibold opacity-75">
                        {screen.location}
                      </span>
                    </div>
                    <p className={`text-xs mt-1.5 leading-relaxed ${activeScreenIndex === idx ? "text-neutral-300" : "text-neutral-600"}`}>
                      {screen.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Operational quick summary */}
              <div className="flex items-center justify-between text-xs font-mono text-neutral-600 pt-2 border-t border-neutral-200">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  <span>08h às 23h</span>
                </span>
                <span>·</span>
                <span>15 Horas/dia</span>
                <span>·</span>
                <span>30 Dias/mês</span>
              </div>
            </div>

          </div>
        </div>

        {/* Big Impact Frequency Numbers Block */}
        <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          {/* Subtle Orange Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF5A1F]/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-2xl mb-12">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold">
                FREQUÊNCIA E PRESENÇA
              </span>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display mt-2 leading-tight">
                Sua marca não aparece uma vez. Ela permanece em circulação.
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 mt-3">
                Presença diária para transformar circulação em lembrança — e lembrança em escolha de compra.
              </p>
            </div>

            {/* Giant Monthly Insertions Callout */}
            <div className="mb-12 pb-10 border-b border-white/10 flex flex-col md:flex-row md:items-baseline gap-4">
              <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#FF5A1F] tabular-nums">
                ≈ 9.795
              </span>
              <div>
                <span className="text-lg sm:text-xl font-bold font-display text-white">
                  inserções estimadas por mês
                </span>
                <p className="text-xs text-neutral-400 font-mono mt-0.5">
                  Projeção acumulada no conjunto de 8 telas ativas do Barra Square
                </p>
              </div>
            </div>

            {/* 4 Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {mallFrequencyStats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
                  <p className="text-2xl sm:text-3xl font-extrabold font-display text-[#FF5A1F] tabular-nums">
                    {stat.number}
                  </p>
                  <p className="text-xs font-bold text-white mt-1">
                    {stat.label}
                  </p>
                  <p className="text-[11px] text-neutral-400 font-mono mt-0.5">
                    {stat.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
