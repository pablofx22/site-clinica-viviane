export interface ProcedimentoAncora {
  numero: string;
  label: string;
  titulo: string;
  descricao: string;
  icone: "botox" | "preenchimento" | "bioestimulador";
  imagem: string;
  imagemAlt: string;
}

export const procedimentosAncora: ProcedimentoAncora[] = [
  {
    numero: "01 - DESTAQUE",
    label: "Mais Solicitado",
    titulo: "Toxina Botulinica",
    descricao:
      "Expressao natural, resultado preciso. Suaviza linhas de expressao com tecnica que preserva movimento e autenticidade.",
    icone: "botox",
    imagem: "/images/procedimentos/toxina-botulinica.jpeg",
    imagemAlt: "Aplicacao de toxina botulinica pela Dra. Viviane Seguro",
  },
  {
    numero: "02 - DESTAQUE",
    label: "Alto Impacto",
    titulo: "Preenchimento Facial com Acido Hialuronico",
    descricao:
      "Contornos que realcam, nao que alteram. Reestruturacao completa de face - malar, mento, mandibula, labios e mais.",
    icone: "preenchimento",
    imagem: "/images/procedimentos/preenchimento-facial.jpeg",
    imagemAlt: "Procedimento de preenchimento facial com acido hialuronico",
  },
  {
    numero: "03 - DESTAQUE",
    label: "Resultado Progressivo",
    titulo: "Bioestimuladores de Colageno",
    descricao:
      "Rejuvenescimento que melhora com o tempo. Sculptra e Radiesse estimulam a producao natural de colageno com resultado duradouro.",
    icone: "bioestimulador",
    imagem: "/images/procedimentos/bioestimuladores.jpeg",
    imagemAlt: "Bioestimulador de colageno Sculptra aplicado pela Dra. Viviane",
  },
];

export interface PortfolioCategoria {
  titulo: string;
  itens: string[];
}

export const portfolioCategorias: PortfolioCategoria[] = [
  {
    titulo: "Renovação da Pele",
    itens: [
      "Limpeza de pele profissional",
      "SkinBoosters",
      "Peelings químicos (glicólico, salicílico, TCA e mais)",
      "Peeling físico de Diamante",
      "Microagulhamento com Drug Delivery",
      "LEDterapia",
      "Consultoria de Skincare",
    ],
  },
  {
    titulo: "Tecnologia e Inovação",
    itens: [
      "Luz Intensa Pulsada (IPL)",
      "Regeneração tecidual com Peptídeos e Exossomos",
      "Prescrições Biomédicas",
    ],
  },
  {
    titulo: "Modelagem e Contorno",
    itens: [
      "Rinomodelação",
      "Preenchimento labial",
      "Contorno de mandíbula e mento",
      "Correção de olheiras",
      "Bigode chinês",
      "Preenchimento de malar e têmporas",
    ],
  },
];