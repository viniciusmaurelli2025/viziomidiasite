import { useState } from "react";
import { ArrowUpRight, Camera, Monitor, Bus, Building2 } from "lucide-react";

interface CaseShowcaseProps {
  onOpenLeadModal: () => void;
}

export default function CaseShowcase({ onOpenLeadModal }: CaseShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | "mall" | "bus">("all");

  const items = [
    {
      id: 1,
      category: "mall",
      title: "Circuito Shopping Barra Square",
      subtitle: "Telas nos corredores centrais e átrio principal",
      image: "/src/assets/images/vizio_mall_screens_1790989391706.jpg",
      specs: "Display 43” e 58” · Alta Resolução",
    },
    {
      id: 2,
      category: "bus",
      title: "Frota Executiva ABM",
      subtitle: "Passageiros em trânsito diário pela Barra da Tijuca",
      image: "/src/assets/images/vizio_bus_interior_1790989382422.jpg",
      specs: "3 Telas por Ônibus · 15 a 120min de Exposição",
    },
    {
      id: 3,
      category: "mall",
      title: "Display de Alta Definição",
      subtitle: "Detalhe de acabamento e fidelidade de cor para marcas",
      image: "/src/assets/images/vizio_screen_detail_1790989401543.jpg",
      specs: "Operação 08h às 23h · Iluminação Otimizada",
    },
    {
      id: 4,
      category: "bus",
      title: "Ambiente Urbano & Mobilidade",
      subtitle: "Presença de marca no cotidiano de milhares de pessoas",
      image: "/src/assets/images/hero_vizio_urban_dooh_1790989371043.jpg",
      specs: "Cobertura Completa Barra da Tijuca / RJ",
    },
  ];

  const filteredItems = activeFilter === "all" ? items : items.filter((i) => i.category === activeFilter);

  return (
    <section className="relative py-28 bg-[#111111] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
                SUA MARCA EM CIRCULAÇÃO
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                GALERIA REAL DOOH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-white max-w-2xl">
              Imagine sua campanha ocupando esse espaço.
            </h2>
          </div>

          {/* Clean Segmented Controls */}
          <div className="flex items-center p-1 bg-neutral-900 rounded-lg border border-white/10 self-start md:self-end">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeFilter === "all"
                  ? "bg-white text-neutral-900 shadow-sm font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Todos os Locais
            </button>
            <button
              onClick={() => setActiveFilter("mall")}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeFilter === "mall"
                  ? "bg-white text-neutral-900 shadow-sm font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Barra Square Mall
            </button>
            <button
              onClick={() => setActiveFilter("bus")}
              className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
                activeFilter === "bus"
                  ? "bg-white text-neutral-900 shadow-sm font-bold"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              Frota ABM Bus
            </button>
          </div>
        </div>

        {/* 4 Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden border border-white/15 bg-neutral-900 shadow-2xl flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F]" />
                  <span>{item.specs}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8 flex items-end justify-between gap-4 bg-neutral-950">
                <div>
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-[#FF7A30] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">
                    {item.subtitle}
                  </p>
                </div>

                <button
                  onClick={onOpenLeadModal}
                  className="p-3 rounded-full bg-white/10 text-white hover:bg-[#FF5A1F] transition-colors shrink-0 cursor-pointer"
                  aria-label="Anunciar neste formato"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
