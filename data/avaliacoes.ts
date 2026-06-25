export interface Avaliacao {
  id: string;
  nome: string;
  inicial: string;
  frase: string;
  texto: string;
  meta: string;
}

export const avaliacoes: Avaliacao[] = [
  {
    id: "luciana",
    nome: "Luciana Maciel",
    inicial: "L",
    frase: "Sai de lá me sentindo cuidada.",
    texto:
      "Atendimento maravilhoso. Profissional que realmente entende do assunto e se preocupa com o paciente. Além do profissionalismo sai de lá me sentindo cuidada.",
    meta: "Paciente · 4 meses atrás",
  },
  {
    id: "gracielle",
    nome: "Gracielle Da Costa Alves",
    inicial: "G",
    frase: "Desde o primeiro atendimento me senti muito bem acolhida.",
    texto:
      "Profissional cuidadosa, ambiente lindo e agradável. O resultado passa confiança desde o início.",
    meta: "Paciente · 4 meses atrás",
  },
  {
    id: "anapaula",
    nome: "Ana Paula Garcia",
    inicial: "A",
    frase: "Profissional maravilhosa e diferenciada.",
    texto:
      "Um ambiente elegante, acolhedor e encantador. Amei tudo desde o primeiro momento.",
    meta: "Local Guide · 4 meses atrás",
  },
  {
    id: "aline",
    nome: "Aline Silva da Silva",
    inicial: "A",
    frase: "Clínica luxuosa e profissional muitíssimo qualificada.",
    texto:
      "Tratamentos com os melhores produtos do mercado. Uma experiência que supera as expectativas.",
    meta: "Paciente · 3 anos atrás",
  },
];

export const ratingGeral = {
  nota: "5.0",
  totalLabel: "Avaliações verificadas no Google",
};