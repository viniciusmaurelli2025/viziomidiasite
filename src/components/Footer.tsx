import { VIZIO_CONTACT } from "../data/vizioData";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0B0B0B] text-neutral-400 border-t border-white/10 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-2xl font-extrabold font-display tracking-tight text-white"
            >
              <span>VIZIO</span>
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
            </a>

            <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
              Conectando anunciantes a públicos reais em ambientes de alta recorrência,
              permanência e visibilidade na Barra da Tijuca, Rio de Janeiro.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono text-neutral-500">
              <MapPin className="w-3.5 h-3.5 text-[#FF5A1F]" />
              <span>{VIZIO_CONTACT.address}</span>
            </div>
          </div>

          {/* Col 2: Empresa */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              EMPRESA
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo("#sobre")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  A VIZIO
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#midias")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Mídias
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#beneficios")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Benefícios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#audiencia")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Audiência
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Produtos */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              PRODUTOS DOOH
            </p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo("#vizio-bus")}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>VIZIO BUS | ABM</span>
                  <span className="text-[10px] text-[#FF5A1F] font-mono">27 Telas</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#vizio-mall")}
                  className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>VIZIO MALL | Barra Square</span>
                  <span className="text-[10px] text-[#FF5A1F] font-mono">8 Telas</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contato */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              ATENDIMENTO COMERCIAL
            </p>
            <ul className="space-y-2.5 text-xs font-mono">
              <li>
                <a
                  href={`mailto:${VIZIO_CONTACT.email}`}
                  className="flex items-center gap-2 hover:text-[#FF5A1F] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#FF5A1F]" />
                  <span>{VIZIO_CONTACT.email}</span>
                </a>
              </li>
              {VIZIO_CONTACT.phones.map((p) => (
                <li key={p.raw}>
                  <a
                    href={`https://wa.me/${p.raw}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between hover:text-[#FF5A1F] transition-colors py-0.5"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-neutral-500" />
                      <span>{p.number}</span>
                    </span>
                    <span className="text-[10px] text-neutral-500 uppercase">{p.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-neutral-500">
          <p>© {new Date().getFullYear()} VIZIO Mídia. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <span>SER VISTO MUDA TUDO.</span>
            <span>·</span>
            <span className="text-neutral-400">DOOH Rio de Janeiro</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
