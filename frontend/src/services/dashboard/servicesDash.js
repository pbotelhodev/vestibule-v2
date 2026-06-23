export const avarage = (data = 0) => {
  if (data < 20) {
    return "Necessário revisão";
  } else if (data >= 20 && data < 40) {
    return "Abaixo da média geral";
  } else if (data >= 40 && data < 60) {
    return "Desempenho regular";
  } else if (data >= 60 && data < 70) {
    return "Dentro da média";
  } else if (data >= 70 && data < 80) {
    return "Bom desempenho";
  } else if (data >= 80 && data < 90) {
    return "Ótimo aproveitamento";
  } else if (data >= 90 && data < 100) {
    return "Desempenho excelente!";
  }
};
