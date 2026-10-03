export default function TrustMarquee() {
  const marqueeItems = [
    "VIZIO BUS",
    "VIZIO MALL",
    "DOOH PREMIUM",
    "ALTA RECORRÊNCIA",
    "AUDIÊNCIA QUALIFICADA",
    "PRESENÇA DIÁRIA",
    "VISIBILIDADE URBANA",
    "BARRA SQUARE",
    "FROTA ABM",
  ];

  return (
    <div className="relative py-8 bg-[#181818] border-y border-white/10 overflow-hidden">
      {/* Subtle top indicator bar */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
          <span className="font-bold tracking-wider text-white uppercase">
            Sua marca em movimento
          </span>
        </div>
        <p className="text-neutral-400">
          Presença estratégica em ambientes de alta circulação e permanência.
        </p>
      </div>

      {/* Marquee Track */}
      <div className="relative flex overflow-x-hidden border-t border-white/5 pt-4">
        {/* Gradient edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#181818] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#181818] to-transparent pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 py-1 select-none">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 shrink-0">
              <span className="text-xl sm:text-2xl font-extrabold font-display tracking-tight text-neutral-300 hover:text-white transition-colors duration-200">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A1F] shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
