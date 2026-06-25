export interface ResultadoCaso {
  id: string;
  procedimento: string;
  // Quando as fotos chegarem, preencher estes dois campos:
  imagemAntes?: string; // ex: "/images/resultados/caso-1-antes.jpg"
  imagemDepois?: string; // ex: "/images/resultados/caso-1-depois.jpg"
}

export const resultadosCasos: ResultadoCaso[] = [
  { id: "caso-1", procedimento: "Toxina Botulínica" },
  { id: "caso-2", procedimento: "Preenchimento Facial" },
  { id: "caso-3", procedimento: "Bioestimuladores" },
];