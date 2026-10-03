import { useState } from "react";
import { BUS_ROUTES } from "../data/vizioData";
import { Bus, Clock, RotateCw, Monitor, MapPin, Users, ArrowUpRight } from "lucide-react";

interface VizioBusSectionProps {
  onOpenLeadModal: (media?: string) => void;
}

export default function VizioBusSection({ onOpenLeadModal }: VizioBusSectionProps) {
  const [selectedRoute, setSelectedRoute] = useState(0);

  const busMetrics = [
    {
      icon: Clock,
      number: "15 a 120 min",
      label: "DE PERMANÊNCIA NO ÔNIBUS",
      description: "O passageiro permanece no mesmo ambiente por muito mais tempo, garantindo tempo de absorção real.",
    },
    {
      icon: RotateCw,
      number: "Até 12 ciclos",
      label: "DE EXIBIÇÃO POR TRAJETO",
      description: "A campanha reaparece e reconquista o olhar repetidas vezes ao longo do trajeto diário.",
    },
    {
      icon: Monitor,
      number: "27 Telas",
      label: "EM 9 VEÍCULOS EXECUTIVOS",
      description: "Presença distribuída pela frota ativa com 3 telas sincronizadas por ônibus.",
    },
  ];

  return (
    <section id="vizio-bus" className="relative py-28 bg-[#111111] border-t border-white/10 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FF5A1F]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
                VIZIO BUS | ABM
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                MOBILIDADE & RECORRÊNCIA
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-white max-w-2xl">
              Sua marca viaja junto.
            </h2>
            <p className="text-lg text-neutral-300 mt-2 max-w-xl">
              Mais do que uma exibição: uma oportunidade de ser visto durante toda a jornada.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal("bus")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF7A30] transition-colors self-start md:self-end cursor-pointer shadow-lg shadow-[#FF5A1F]/25"
          >
            <span>ANUNCIAR NO VIZIO BUS</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Visual Card with High-Impact Transit Photography */}
        <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-950 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Screen on Left */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[500px]">
              <img
                src="/src/assets/images/vizio_bus_interior_1790989382422.jpg"
                alt="Interior do VIZIO BUS com telas digitais"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 lg:bg-gradient-to-r lg:from-transparent lg:to-neutral-950" />
              
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs font-mono text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>3 TELAS DIGITAIS POR VEÍCULO</span>
              </div>
            </div>

            {/* Strategic Provocation on Right */}
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-neutral-950">
              <div className="space-y-6">
                <div className="inline-block px-3 py-1 rounded bg-[#FF5A1F]/15 border border-[#FF5A1F]/30 text-xs font-mono font-bold text-[#FF5A1F]">
                  DIFERENCIAL EXCLUSIVO
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white leading-snug">
                  O celular disputa a atenção. <br />
                  <span className="text-[#FF5A1F]">A VIZIO permanece no ambiente.</span>
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  Na publicidade, a atenção dura segundos. Na VIZIO BUS, a oportunidade
                  de ser visto volta durante toda a viagem, garantindo fixação memorável na
                  mente do passageiro.
                </p>
              </div>

              <div className="pt-8 border-t border-white/10 mt-8 space-y-4">
                <div className="flex items-center justify-between text-xs text-neutral-400 font-mono">
                  <span>EXPANSÃO PLANEJADA:</span>
                  <span className="text-white font-bold">12 Ônibus · 36 Telas</span>
                </div>
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#FF5A1F] h-full w-3/4 rounded-full" />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 3 Core Bus Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {busMetrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF5A1F]/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5A1F] mb-6 group-hover:bg-[#FF5A1F] group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold font-display text-white tabular-nums mb-1">
                  {item.number}
                </p>
                <p className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7A30] mb-3">
                  {item.label}
                </p>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bus Audience & Coverage Deep-Dive Box */}
        <div className="rounded-3xl border border-white/15 bg-gradient-to-b from-neutral-900 to-black p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left: Audience breakdown */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#FF5A1F]" />
                <span className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] font-bold">
                  AUDIÊNCIA EM MOVIMENTO
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                Uma comunidade inteira em movimento.
              </h3>

              <div className="grid grid-cols-2 gap-6 pt-2">
                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-3xl sm:text-4xl font-extrabold font-display text-[#FF5A1F] tabular-nums">
                    15 MIL+
                  </p>
                  <p className="text-xs text-neutral-300 font-medium mt-1">
                    passageiros todos os meses
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/5 border border-white/10">
                  <p className="text-3xl sm:text-4xl font-extrabold font-display text-white tabular-nums">
                    20 MIL
                  </p>
                  <p className="text-xs text-neutral-300 font-medium mt-1">
                    moradores na base residencial ABM
                  </p>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed">
                Um público altamente qualificado, conectado às decisões cotidianas de
                consumo da família e presente em diferentes rotas e horários de trabalho,
                estudos e lazer.
              </p>
            </div>

            {/* Right: Interactive Route Explorer */}
            <div className="lg:col-span-6 rounded-2xl bg-neutral-950 border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF5A1F]" />
                  <span className="text-xs font-mono font-bold uppercase text-white">
                    ITINERÁRIOS OFICIAIS ABM
                  </span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400">
                  FROTA ATIVA
                </span>
              </div>

              {/* Route Selectors */}
              <div className="space-y-3">
                {BUS_ROUTES.map((route, idx) => (
                  <button
                    key={route.name}
                    onClick={() => setSelectedRoute(idx)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                      selectedRoute === idx
                        ? "bg-[#FF5A1F]/15 border-[#FF5A1F] text-white"
                        : "bg-white/[0.02] border-white/10 text-neutral-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold font-mono uppercase text-[#FF5A1F]">
                        {route.name}
                      </span>
                      <span className="text-[11px] font-mono text-neutral-300 bg-white/5 px-2 py-0.5 rounded">
                        {route.travelTime}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 mt-1">
                      <strong>Trajeto:</strong> {route.stops}
                    </p>
                    <p className="text-[11px] text-neutral-400 mt-1">
                      <strong>Perfil:</strong> {route.audienceProfile}
                    </p>
                  </button>
                ))}
              </div>

              {/* Fleet formula banner */}
              <div className="mt-4 p-3 rounded-lg bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-neutral-300">
                <span>COBERTURA TOTAL DA FROTA:</span>
                <span className="text-[#FF5A1F] font-bold">9 Ônibus × 3 Telas = 27 TELAS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
