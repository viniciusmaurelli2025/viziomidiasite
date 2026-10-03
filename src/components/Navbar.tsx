import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";

interface NavbarProps {
  onOpenLeadModal: (initialMedia?: string) => void;
}

export default function Navbar({ onOpenLeadModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "A VIZIO", href: "#sobre" },
    { label: "Mídias", href: "#midias" },
    { label: "Benefícios", href: "#beneficios" },
    { label: "Audiência", href: "#audiencia" },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#111111]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl"
            : "bg-gradient-to-b from-[#111111]/80 via-[#111111]/40 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="group flex items-center gap-1.5 text-2xl font-extrabold tracking-tight text-white font-display select-none"
            aria-label="VIZIO Mídia Início"
          >
            <span>VIZIO</span>
            <span className="w-2 h-2 rounded-full bg-[#FF5A1F] inline-block transition-transform duration-300 group-hover:scale-125" />
          </a>

          {/* Zone 2: 4–6 nav links, 1–2 word labels */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="transition-colors duration-200 hover:text-white hover:underline underline-offset-8 decoration-[#FF5A1F] decoration-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenLeadModal()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF7A30] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#FF5A1F]/20 whitespace-nowrap cursor-pointer"
            >
              <span>QUERO ANUNCIAR</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111]/98 backdrop-blur-xl flex flex-col justify-between p-8 pt-28 md:hidden animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <p className="text-xs uppercase tracking-widest text-[#FF5A1F] font-semibold">
              Navegação
            </p>
            <nav className="flex flex-col gap-5 text-2xl font-bold font-display text-white">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-2 border-b border-white/10 hover:text-[#FF5A1F] transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-5 h-5 text-neutral-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-4 pt-8 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLeadModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-full bg-[#FF5A1F] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#FF5A1F]/30 cursor-pointer"
            >
              <span>QUERO ANUNCIAR</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/5521981734353?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20como%20anunciar%20na%20VIZIO%20M%C3%ADdia."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-full border border-white/20 text-neutral-300 text-xs font-semibold uppercase tracking-wider hover:bg-white/5 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Falar no WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
