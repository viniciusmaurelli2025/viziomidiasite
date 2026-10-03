import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, MessageSquare, Phone, ArrowUpRight } from "lucide-react";
import { VIZIO_CONTACT } from "../data/vizioData";

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMedia?: string;
}

export default function LeadModal({
  isOpen,
  onClose,
  initialMedia = "all",
}: LeadModalProps) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [mediaInterest, setMediaInterest] = useState(initialMedia);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (initialMedia) {
      setMediaInterest(initialMedia);
    }
  }, [initialMedia]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setError("Por favor, informe seu nome e telefone/WhatsApp.");
      return;
    }

    setError("");
    setSubmitted(true);

    // Prepare WhatsApp message
    const mediaLabel =
      mediaInterest === "bus"
        ? "VIZIO BUS (Frota ABM)"
        : mediaInterest === "mall"
        ? "VIZIO MALL (Barra Square)"
        : "Ambos os Formatos";

    const text = encodeURIComponent(
      `Olá VIZIO Mídia! Gostaria de receber uma proposta de veiculação:\n\n` +
      `• Nome: ${name}\n` +
      `• Empresa: ${company || "Não informada"}\n` +
      `• Telefone/WhatsApp: ${phone}\n` +
      `• E-mail: ${email || "Não informado"}\n` +
      `• Mídia de Interesse: ${mediaLabel}\n` +
      (message ? `• Observações: ${message}\n` : "")
    );

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(`https://wa.me/${VIZIO_CONTACT.whatsappDefault}?text=${text}`, "_blank");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl rounded-3xl border border-white/20 bg-neutral-900 p-6 sm:p-8 shadow-2xl z-10 text-white animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#FF5A1F]" />
              <span className="text-xs font-mono font-bold tracking-widest text-[#FF5A1F] uppercase">
                CONTATO COMERCIAL VIZIO
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Coloque sua marca em circulação.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 mb-6">
              Preencha os dados abaixo para receber tabela de disponibilidade e atendimento imediato.
            </p>

            {error && (
              <div className="p-3 mb-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    Empresa / Marca
                  </label>
                  <input
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="Nome da sua marca"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    WhatsApp / Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(21) 99999-9999"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="seuemail@empresa.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Mídia de Interesse
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setMediaInterest("bus")}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      mediaInterest === "bus"
                        ? "bg-[#FF5A1F] border-[#FF5A1F] text-white font-bold"
                        : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
                    }`}
                  >
                    VIZIO BUS
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaInterest("mall")}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      mediaInterest === "mall"
                        ? "bg-[#FF5A1F] border-[#FF5A1F] text-white font-bold"
                        : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
                    }`}
                  >
                    VIZIO MALL
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaInterest("all")}
                    className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors cursor-pointer ${
                      mediaInterest === "all"
                        ? "bg-[#FF5A1F] border-[#FF5A1F] text-white font-bold"
                        : "bg-white/5 border-white/10 text-neutral-300 hover:text-white"
                    }`}
                  >
                    Ambos
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-neutral-400 mb-1.5 uppercase">
                  Mensagem / Observações
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ex: Gostaria de saber disponibilidade para início no próximo mês."
                  className="w-full px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#FF5A1F] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full bg-[#FF5A1F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#FF7A30] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#FF5A1F]/30"
              >
                <span>SOLICITAR PROPOSTA NO WHATSAPP</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-neutral-500 font-mono">
                  Atendimento comercial direto: (21) 98173-4353
                </span>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold font-display text-white">
              Solicitação Enviada!
            </h3>

            <p className="text-sm text-neutral-300 max-w-sm mx-auto">
              Sua mensagem está sendo redirecionada para a equipe comercial VIZIO Mídia via WhatsApp.
            </p>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider hover:bg-white/20 transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
