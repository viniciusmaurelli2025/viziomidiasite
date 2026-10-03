import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

interface MetricCardProps {
  number: string;
  label: string;
  description: string;
  index: number;
}

function MetricCard({ number, label, description, index }: MetricCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl bg-white/80 border border-neutral-300/80 shadow-sm hover:shadow-xl hover:border-[#FF5A1F]/50 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#FF5A1F]">
            0{index + 1}
          </span>
          <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-[#FF5A1F] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>

        <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight text-[#111111] tabular-nums mb-2">
          {number}
        </p>

        <p className="text-xs font-bold font-mono uppercase tracking-wider text-neutral-600 mb-3">
          {label}
        </p>
      </div>

      <p className="text-sm text-neutral-700 leading-relaxed pt-4 border-t border-neutral-200">
        {description}
      </p>
    </div>
  );
}

export default function MetricsSection() {
  const metrics = [
    {
      number: "8+",
      label: "TELAS DIGITAIS",
      description: "Pontos digitais estratégicos e com alto fluxo no Shopping Barra Square.",
    },
    {
      number: "15 MIL+",
      label: "PASSAGEIROS / MÊS",
      description: "Audiência mensal qualificada e recorrente da VIZIO BUS | ABM.",
    },
    {
      number: "20 MIL+",
      label: "MORADORES DA ABM",
      description: "Base residencial potencial e de alto poder aquisitivo na região da ABM.",
    },
    {
      number: "27",
      label: "TELAS ATIVAS NA FROTA",
      description: "Cobertura atual da frota executiva VIZIO BUS (9 veículos × 3 telas).",
    },
  ];

  return (
    <section className="relative py-28 bg-[#F4F1EC] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
                POR QUE VIZIO?
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                IMPACTO COMPROVADO
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-[#111111] max-w-2xl">
              Transformamos circulação em oportunidade.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-md">
            Métricas sólidas, audiência auditável e ambientes que garantem tempo de
            atenção real para marcas que não querem passar despercebidas.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <MetricCard
              key={item.label}
              index={idx}
              number={item.number}
              label={item.label}
              description={item.description}
            />
          ))}
        </div>

        {/* Footnote statement */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <span className="w-3 h-3 rounded-full bg-[#FF5A1F] shrink-0" />
            <p className="text-sm sm:text-base text-neutral-200">
              <strong className="text-white font-semibold">Exposição Sem Concorrência:</strong> Enquanto o feed digital se perde em segundos, o DOOH VIZIO permanece visível em telas reais de grande porte.
            </p>
          </div>
          <a
            href="#midias"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF7A30] transition-colors whitespace-nowrap"
          >
            <span>CONHECER OS FORMATOS</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
