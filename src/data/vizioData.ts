export interface CreativeService {
  name: string;
  description: string;
  deliverables: string[];
}

export const VIZIO_CONTACT = {
  email: "viziomidia@gmail.com",
  phones: [
    { label: "Comercial 1", number: "(21) 98173-4353", raw: "5521981734353" },
    { label: "Comercial 2", number: "(21) 99379-8511", raw: "5521993798511" },
    { label: "Atendimento", number: "(21) 96625-6889", raw: "5521966256889" },
  ],
  whatsappDefault: "5521981734353",
  address: "Barra da Tijuca — Rio de Janeiro, RJ",
};

export const CREATIVE_SERVICES: CreativeService[] = [
  {
    name: "ESTÁTICA",
    description: "Design estático de alto impacto visual adaptado aos formatos verticais e horizontais.",
    deliverables: ["Layout otimizado para DOOH", "Adaptação de resolução", "Entrega pronta para veiculação"],
  },
  {
    name: "MOTION",
    description: "Animação gráfica dinâmica de elementos, tipografia e produtos que capturam o olhar em movimento.",
    deliverables: ["Animação em 2D", "Transições ritmadas", "Timing adaptado ao tempo de ciclo"],
  },
  {
    name: "VÍDEO",
    description: "Produção e edição em formato cinematográfico com narrativa visual direta e memorável.",
    deliverables: ["Edição profissional", "Color grading & finalização", "Formatos 10s, 20s ou 30s"],
  },
];

export const MALL_SCREENS = [
  {
    size: "3 × 32”",
    location: "Corredores de Acesso & Serviços",
    description: "Telas posicionadas em pontos de passagem obrigatória e áreas de serviços do shopping.",
  },
  {
    size: "4 × 43”",
    location: "Átrio Principal & Praça de Circulação",
    description: "Display em locais com visão desobstruída e tempo de permanência prolongado.",
  },
  {
    size: "1 × 58”",
    location: "Entrada Principal & Praça Gastronômica",
    description: "Tela de grande formato com altíssimo impacto visual na recepção de todos os clientes.",
  },
];

export const BUS_ROUTES = [
  {
    name: "Linha 01 — ABM Circular Expresso",
    stops: "Bosque Marapendi · Ponte Lúcio Costa · Praia da Barra · Jardim Oceânico",
    travelTime: "45 a 80 min",
    audienceProfile: "Moradores locais, famílias e profissionais executivos",
  },
  {
    name: "Linha 02 — ABM Conexão Metrô & Shoppings",
    stops: "Condomínios ABM · Shopping Downtown · Barra Square · Estação Metrô",
    travelTime: "30 a 60 min",
    audienceProfile: "Estudantes, trabalhadores qualificados e consumidores",
  },
  {
    name: "Linha 03 — ABM Linha Especial Amarela/Central",
    stops: "Barra da Tijuca · Vias Expressas · Centro Empresarial",
    travelTime: "60 a 120 min",
    audienceProfile: "Decisores de compra em jornada pendular diária",
  },
];
