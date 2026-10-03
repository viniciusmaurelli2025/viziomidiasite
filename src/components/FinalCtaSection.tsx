import { ArrowUpRight, MessageSquare, PhoneCall } from "lucide-react";
import { VIZIO_CONTACT } from "../data/vizioData";

interface FinalCtaProps {
  onOpenLeadModal: () => void;
}

export default function FinalCtaSection({ onOpenLeadModal }: FinalCtaProps) {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#111111] via-[#1A0C06] to-[#111111] border-t border-white/10 overflow-hidden">
      
      {/* Background Graphic Lines and Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#FF5A1F]/20 rounded-full blur-[140px]" />
        
        {/* Abstract Technical Geometric Circle Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#FF5A1F]/15 rounded-full pointer-events-none animate-[spin_60s_linear_infinite]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-white/5 rounded-full pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
          <span className="text-xs uppercase tracking-[0.25em] font-bold text-[#FF5A1F]">
            VIZIO MÍDIA
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-display leading-[1.08] text-white tracking-tight mb-4">
          Sua marca merece ser{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A1F] via-[#FF7A30] to-[#FF9E66]">
            vista.
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-neutral-300 max-w-xl mx-auto mb-10 leading-relaxed">
          Coloque sua comunicação em movimento nos pontos de maior prestígio e fluxo da Barra da Tijuca.
        </p>

        {/* Primary and Secondary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenLeadModal}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FF5A1F] text-white text-sm font-bold uppercase tracking-wider hover:bg-[#FF7A30] active:scale-[0.98] transition-all duration-200 shadow-2xl shadow-[#FF5A1F]/40 cursor-pointer whitespace-nowrap"
          >
            <span>QUERO ANUNCIAR</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href={`https://wa.me/${VIZIO_CONTACT.whatsappDefault}?text=${encodeURIComponent(
              "Olá VIZIO Mídia! Gostaria de falar com um consultor comercial sobre anúncios."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/25 text-white text-sm font-semibold uppercase tracking-wider hover:bg-white/10 hover:border-white/40 active:scale-[0.98] transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            <MessageSquare className="w-4 h-4 text-emerald-400" />
            <span>FALAR COM A VIZIO</span>
          </a>
        </div>

        {/* Trust numbers row */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-neutral-400">
          <div>
            <strong className="text-white">8 Telas</strong> Barra Square
          </div>
          <span className="text-neutral-600">·</span>
          <div>
            <strong className="text-white">27 Telas</strong> Frota ABM
          </div>
          <span className="text-neutral-600">·</span>
          <div>
            <strong className="text-white">15.000+</strong> Passageiros/mês
          </div>
          <span className="text-neutral-600">·</span>
          <div>
            <strong className="text-white">≈ 9.795</strong> Inserções/mês
          </div>
        </div>

      </div>
    </section>
  );
}
