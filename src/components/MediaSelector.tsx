import { useState } from "react";
import { Bus, Monitor, ArrowRight, CheckCircle2 } from "lucide-react";

interface MediaSelectorProps {
  onSelectTab: (tabId: "bus" | "mall") => void;
  activeTab: "bus" | "mall";
}

export default function MediaSelector({ onSelectTab, activeTab }: MediaSelectorProps) {
  const tabs = [
    {
      id: "bus" as const,
      icon: Bus,
      title: "VIZIO BUS",
      tagline: "Sua marca em movimento.",
      audience: "15 MIL+ passageiros/mês",
      coverage: "27 Telas em 9 Ônibus ABM",
      description:
        "Uma audiência residencial, familiar e recorrente, presente em diferentes rotas, horários e momentos da rotina.",
      features: [
        "15 a 120 minutos de permanência contínua",
        "Até 12 ciclos de exibição por trajeto",
        "Cobertura total nos principais eixos da Barra da Tijuca",
      ],
      image: "/src/assets/images/vizio_bus_interior_1790989382422.jpg",
      targetId: "#vizio-bus",
    },
    {
      id: "mall" as const,
      icon: Monitor,
      title: "VIZIO MALL",
      tagline: "Sua marca presente no shopping.",
      audience: "Barra Square Mall",
      coverage: "8 Telas Digitais (32”, 43” e 58”)",
      description:
        "Telas digitais posicionadas em pontos estratégicos do Barra Square para acompanhar o caminho do cliente do acesso à compra.",
      features: [
        "15 horas por dia de operação contínua (08h–23h)",
        "≈ 9.795 inserções mensais na rede de telas",
        "Vídeos e motions de até 20 segundos em alta definição",
      ],
      image: "/src/assets/images/vizio_mall_screens_1790989391706.jpg",
      targetId: "#vizio-mall",
    },
  ];

  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  const scrollToSection = (hash: string) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="midias" className="relative py-28 bg-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
                NOSSAS MÍDIAS
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                FORMATOS & LOCAIS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-white max-w-2xl">
              Duas formas de colocar sua marca no caminho do cliente.
            </h2>
          </div>

          {/* Interactive Tab Switcher */}
          <div className="flex items-center p-1.5 bg-neutral-900 rounded-full border border-white/10 self-start md:self-end">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onSelectTab(tab.id)}
                  className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#FF5A1F] text-white shadow-lg shadow-[#FF5A1F]/25"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Tab Showcase Box */}
        <div className="rounded-3xl border border-white/15 bg-neutral-900/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl transition-all duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="flex items-center gap-2.5 text-xs font-mono font-bold text-[#FF5A1F] uppercase mb-2">
                  <span>{current.coverage}</span>
                  <span>·</span>
                  <span>{current.audience}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                  {current.title}
                </h3>
                <p className="text-lg text-[#FF7A30] font-semibold mt-1">
                  {current.tagline}
                </p>

                <p className="text-base text-neutral-300 leading-relaxed mt-4">
                  {current.description}
                </p>
              </div>

              {/* Feature Points */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                {current.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5A1F] shrink-0 mt-1" />
                    <span className="text-sm text-neutral-200">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => scrollToSection(current.targetId)}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-white text-[#111111] text-xs font-bold uppercase tracking-wider hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  <span>DETALHES DO {current.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: High-Res Visual Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] border border-white/15 bg-black shadow-2xl group">
                <img
                  src={current.image}
                  alt={current.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white/90">
                  <span className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-md border border-white/15">
                    {current.id === "bus" ? "TRANSPORTE EXECUTIVO ABM" : "BARRA SQUARE MALL"}
                  </span>
                  <span className="text-[#FF5A1F] font-bold">100% DIGITAL DOOH</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
