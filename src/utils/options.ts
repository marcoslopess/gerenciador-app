export type Options = {
  label: string;
  value: string | number;
};

export const listCategory: Array<Options> = [
  {
    label: "Alimentação",
    value: "ALIMENTACAO",
  },
  {
    label: "Moradia",
    value: "MORADIA",
  },
  {
    label: "Cartão de crédito",
    value: "CARTAO_DE_CREDITO",
  },
  {
    label: "Seguros",
    value: "SEGUROS",
  },
  {
    label: "Educação",
    value: "EDUCACAO",
  },
  {
    label: "Eletrônicos",
    value: "ELETRONICOS",
  },
  {
    label: "Filhos",
    value: "FILHOS",
  },
  {
    label: "Financiamentos",
    value: "FINANCIAMENTOS",
  },
  {
    label: "Lazer",
    value: "LAZER",
  },
  {
    label: "Investimentos",
    value: "INVESTIMENTOS",
  },
  {
    label: "Vestuário e Beleza",
    value: "VESTUARIO_E_BELEZA",
  },
  {
    label: "Reserva de Emergência",
    value: "RESERVA_DE_EMERGENCIA",
  },
  {
    label: "Saúde",
    value: "SAUDE",
  },
  {
    label: "Transporte",
    value: "TRANSPORTE",
  },
  {
    label: "Animais de estimação",
    value: "ANIMAIS_DE_ESTIMACAO",
  },
  {
    label: "Faturas",
    value: "FATURAS",
  },
  {
    label: "Vendas",
    value: "VENDAS",
  },
  {
    label: "Impostos",
    value: "IMPOSTOS",
  },
  {
    label: "Salário",
    value: "SALARIO",
  },
  {
    label: "Doações",
    value: "DOACOES",
  },
  {
    label: "Emprestimos",
    value: "EMPRESTIMOS",
  },
  {
    label: "Futuros",
    value: "FUTUROS",
  },
  {
    label: "Futuros 2",
    value: "FUTUROS_2",
  },
  {
    label: "Categoria Personalizada 9",
    value: "CATEGORIA_PERSONALIZADA_9",
  },
  {
    label: "Streaming",
    value: "STREAMING",
  },
  {
    label: "Aluguel",
    value: "ALUGUEL",
  },
].sort((a, b) => a.label.localeCompare(b.label));
listCategory.unshift({
  label: "Selecione uma categoria",
  value: "",
});

export const listFormPayment: Array<Options> = [
  {
    label: "Selecione uma forma de pagamento",
    value: "",
  },
  {
    label: "Débito",
    value: "DEBITO",
  },
  {
    label: "Crédito",
    value: "CREDITO",
  },
  {
    label: "Pix",
    value: "PIX",
  },
  {
    label: "Dinheiro",
    value: "DINHEIRO",
  },
  {
    label: "Vale Alimentação",
    value: "VALE_ALIMENTACAO",
  },
];

export const listType: Array<Options> = [
  {
    label: "Selecione um tipo",
    value: "",
  },
  {
    label: "Essencial",
    value: "ESSENCIAL",
  },
  {
    label: "Não essencial",
    value: "NAO_ESSENCIAL",
  },
];

export const listMonth: Array<Options> = [
  {
    label: "Selecione um mês",
    value: 0,
  },
  { value: 1, label: "Janeiro" },
  { value: 2, label: "Fevereiro" },
  { value: 3, label: "Março" },
  { value: 4, label: "Abril" },
  { value: 5, label: "Maio" },
  { value: 6, label: "Junho" },
  { value: 7, label: "Julho" },
  { value: 8, label: "Agosto" },
  { value: 9, label: "Setembro" },
  { value: 10, label: "Outubro" },
  { value: 11, label: "Novembro" },
  { value: 12, label: "Dezembro" },
];

export const listTypeFinance: Array<Options> = [
  {
    label: "Selecione um tipo de registro",
    value: "",
  },
  {
    label: "Entrada",
    value: "ENTRADA",
  },
  {
    label: "Saída",
    value: "SAIDA",
  },
];
