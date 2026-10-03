import { CREATIVE_SERVICES, VIZIO_CONTACT } from "../data/vizioData";
import { Palette, Film, Video, ArrowUpRight, CheckCircle2 } from "lucide-react";

interface CreativeServicesProps {
  onOpenLeadModal: (media?: string) => void;
}

export default function CreativeServicesSection({ onOpenLeadModal }: CreativeServicesProps) {
  const icons = [Palette, Film, Video];

  return (
    <section className="relative py-28 bg-[#181818] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="h-[1px] w-12 bg-[#FF5A1F]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-[#FF5A1F]">
                PRECISA DA PEÇA?
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                PRODUÇÃO CRIATIVA DOOH
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display leading-[1.1] text-white max-w-2xl">
              Sua marca ainda não tem o material?
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              A VIZIO também ajuda você na criação e adaptação da comunicação com formatos
              projetados especificamente para chamar atenção em telas públicas.
            </p>
          </div>

          <button
            onClick={() => onOpenLeadModal("creative")}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/20 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/10 transition-colors self-start md:self-end cursor-pointer"
          >
            <span>FALAR COM A VIZIO</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Creative Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CREATIVE_SERVICES.map((srv, idx) => {
            const Icon = icons[idx];
            return (
              <div
                key={srv.name}
                className="p-8 rounded-2xl bg-neutral-900/80 border border-white/10 hover:border-[#FF5A1F]/60 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF5A1F] group-hover:bg-[#FF5A1F] group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-neutral-500">FORMATO 0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold font-display text-white">
                    {srv.name}
                  </h3>

                  <div className="mt-2 mb-3">
                    <span className="inline-block text-[11px] font-mono font-semibold uppercase tracking-wider text-[#FF5A1F] bg-[#FF5A1F]/10 px-2.5 py-1 rounded border border-[#FF5A1F]/20">
                      Valores sob consulta
                    </span>
                  </div>

                  <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
                    {srv.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5">
                    {srv.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A1F] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <a
                    href={`https://wa.me/${VIZIO_CONTACT.whatsappDefault}?text=${encodeURIComponent(
                      `Olá! Gostaria de solicitar um orçamento para criação de peças no formato ${srv.name} pela VIZIO.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-white hover:text-[#FF5A1F] transition-colors"
                  >
                    <span>SOLICITAR ORÇAMENTO</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
