import { ArrowUpRight } from "lucide-react";

interface MobileStickyCtaProps {
  onOpenLeadModal: () => void;
}

export default function MobileStickyCta({ onOpenLeadModal }: MobileStickyCtaProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-[#111111]/95 backdrop-blur-md border-t border-white/10 shadow-2xl">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenLeadModal}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#FF5A1F]/30 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
        >
          <span>QUERO ANUNCIAR</span>
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
