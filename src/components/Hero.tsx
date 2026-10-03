import { ArrowUpRight, Play, Compass, Monitor, Bus } from "lucide-react";

interface HeroProps {
  onOpenLeadModal: () => void;
  onExploreClick: () => void;
}

export default function Hero({ onOpenLeadModal, onExploreClick }: HeroProps) {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-[#111111] bg-tech-grid">
      {/* Background Image with Layered Gradient Scrim */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <img
          src="/src/assets/images/hero_vizio_urban_dooh_1790989371043.jpg"
          alt="VIZIO DOOH Mídia em Movimento e Shopping"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-35 scale-105 transition-transform duration-1000 ease-out"
        />
        {/* Measured scrims to satisfy WCAG AA legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/60 to-transparent" />
        {/* Subtle orange radial ambient glow */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#FF5A1F]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full my-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Asymmetrical Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Eyebrow with technical line */}
            <div className="flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#FF5A1F]">
                VIZIO MÍDIA
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                DOOH · ABM · BARRA SQUARE
              </span>
            </div>

            {/* Headline with 'presente' highlighted */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display leading-[1.08] tracking-tight text-white max-w-2xl">
              Sua marca{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FF7A30] to-[#FF9E66]">
                presente
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FF5A1F]/70 rounded-full" />
              </span>{" "}
              onde as pessoas estão.
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed">
              Mídia digital em movimento e em pontos estratégicos. Mais presença,
              mais recorrência e mais oportunidades de ser visto.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenLeadModal}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FF5A1F] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#FF7A30] active:scale-[0.98] transition-all duration-200 shadow-xl shadow-[#FF5A1F]/25 cursor-pointer whitespace-nowrap"
              >
                <span>QUERO ANUNCIAR</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/25 text-white text-sm font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <span>CONHEÇA A VIZIO</span>
              </button>
            </div>

            {/* Subtle live indicator & stats row */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-neutral-400 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-neutral-200 font-medium">REDE ATIVA 100% DIGITAL</span>
              </div>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <div>
                <span className="text-white font-bold tabular-nums">35+</span> TELAS TOTAIS
              </div>
              <span className="hidden sm:inline text-neutral-600">|</span>
              <div>
                <span className="text-white font-bold tabular-nums">15.000+</span> PASSAGEIROS/MÊS
              </div>
            </div>
          </div>

          {/* Right Column: High-tech Media Simulator & Floating Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl border border-white/15 bg-neutral-900/80 backdrop-blur-xl p-5 shadow-2xl overflow-hidden group">
              
              {/* Technical Header inside mockup */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/10 text-xs">
                <div className="flex items-center gap-2 font-mono text-neutral-400">
                  <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
                  <span>VIZIO NETWORK MONITOR</span>
                </div>
                <span className="text-[11px] font-mono text-neutral-400 bg-white/5 px-2 py-0.5 rounded">
                  TRANSMISSÃO 4K
                </span>
              </div>

              {/* Main Simulated DOOH Screen */}
              <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-black border border-white/10 shadow-inner">
                <img
                  src="/src/assets/images/vizio_mall_screens_1790989391706.jpg"
                  alt="Tela Digital VIZIO Mall"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* On-screen campaign simulation overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-center justify-between text-xs text-neutral-300 font-mono mb-1">
                    <span className="text-[#FF5A1F] font-bold">BARRA SQUARE • ÁTRIO PRINCIPAL</span>
                    <span>CICLO ATIVO</span>
                  </div>
                  <p className="text-sm font-bold text-white font-display">
                    Sua marca exposta para milhares de pessoas todos os dias.
                  </p>
                </div>

                {/* Floating live badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/75 backdrop-blur-md border border-white/20 text-[10px] font-mono text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>EM EXIBIÇÃO</span>
                </div>
              </div>

              {/* Lower 2-column channel status */}
              <div className="grid grid-cols-2 gap-3 mt-4 pt-1">
                <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3 hover:border-[#FF5A1F]/50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                    <Bus className="w-4 h-4 text-[#FF5A1F]" />
                    <span>VIZIO BUS</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    27 telas em 9 veículos executivos ABM.
                  </p>
                </div>

                <div className="rounded-lg bg-white/[0.03] border border-white/10 p-3 hover:border-[#FF5A1F]/50 transition-colors">
                  <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                    <Monitor className="w-4 h-4 text-[#FF5A1F]" />
                    <span>VIZIO MALL</span>
                  </div>
                  <p className="text-[11px] text-neutral-400">
                    8 telas digitais estratégicas no Barra Square.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Hero Bottom Bar / Scroll Anchor */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between text-xs text-neutral-500 font-mono">
        <div className="flex items-center gap-2">
          <Compass className="w-3.5 h-3.5 text-[#FF5A1F]" />
          <span>RIO DE JANEIRO · BARRA DA TIJUCA</span>
        </div>
        <button
          onClick={onExploreClick}
          className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
        >
          <span>EXPLORAR</span>
          <span className="text-[#FF5A1F]">↓</span>
        </button>
      </div>
    </section>
  );
}
