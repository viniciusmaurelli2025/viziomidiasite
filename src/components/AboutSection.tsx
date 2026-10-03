import { CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="sobre" className="relative py-28 bg-[#111111] overflow-hidden">
      {/* Decorative technical line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header Eyebrow */}
        <div className="flex items-center gap-3 mb-12">
          <span className="h-[1px] w-12 bg-[#FF5A1F]" />
          <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
            A VIZIO
          </span>
          <span className="text-xs text-neutral-500 font-mono">
            01 · VISÃO E PROPÓSITO
          </span>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Provocative Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.12] text-white">
              Não basta aparecer. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">
                É preciso permanecer.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              A VIZIO cria oportunidades para sua marca estar presente durante a rotina
              das pessoas. Em movimento, em pontos estratégicos e em ambientes onde a
              audiência permanece.
            </p>

            {/* Strategic Highlight Banner */}
            <div className="p-6 rounded-2xl bg-neutral-900/90 border border-[#FF5A1F]/30 glow-orange-sm">
              <p className="text-xs font-mono uppercase tracking-widest text-[#FF5A1F] mb-1.5 font-semibold">
                O EFEITO VIZIO
              </p>
              <p className="text-xl sm:text-2xl font-bold font-display text-white">
                Mais presença. Mais recorrência. Mais lembrança.
              </p>
              <p className="text-xs text-neutral-400 mt-2">
                Conectando anunciantes a públicos reais com alta atenção no Rio de Janeiro.
              </p>
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Audiência Qualificada</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Público de alto poder aquisitivo e decisão familiar de compra.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Zap className="w-5 h-5 text-[#FF5A1F] shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-white">Zero Dispersão</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    Telas sem concorrer com poluição visual desenfreada.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Media Photo with Technical Frames */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl border border-white/15 bg-neutral-900 p-3 shadow-2xl overflow-hidden group">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black">
                <img
                  src="/src/assets/images/vizio_screen_detail_1790989401543.jpg"
                  alt="Tela Digital VIZIO em Alta Resolução"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Floating Technical Tag */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                  <div>
                    <span className="block font-bold text-white font-display">Telas Full HD & 4K</span>
                    <span className="text-[11px] text-neutral-400 font-mono">Sinalização digital sem interrupção</span>
                  </div>
                  <span className="text-[#FF5A1F] font-mono font-bold">100% OPERAÇÃO</span>
                </div>
              </div>

              {/* Technical corner indicators */}
              <div className="flex justify-between items-center px-3 pt-3 text-[11px] font-mono text-neutral-500">
                <span>DOOH INFRASTRUCTURE</span>
                <span>BARRA DA TIJUCA / RJ</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
