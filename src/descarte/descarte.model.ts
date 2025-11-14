// Este é o nosso "modelo" simples, sem banco de dados.
// Apenas uma classe que define a estrutura dos dados.

export class Descarte {
  id: string;
  nomeUsuario: string;
  tipoResiduo: string;
  data: Date; // O Service vai garantir que isso seja um objeto Date
  pontoDeDescarteId: string;
}