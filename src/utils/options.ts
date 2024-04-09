type Options = {
  label: string;
  value: string;
};

interface IRegisterAlertPhone {
  value: string;
  list: Array<{ _id: string; value: string }>;
  selectedList: Array<{ _id: string; value: string }>;
  error: string;
}

export const listOperator: Array<Options> = [
  {
    label: "Selecione uma operadora",
    value: "",
  },
  {
    label: "Claro",
    value: "CLARO",
  },
  {
    label: "Vivo",
    value: "VIVO",
  },
  {
    label: "Tim",
    value: "TIM",
  },
  {
    label: "Algar Telecom",
    value: "ALGAR_TELECOM",
  },
  {
    label: "Sercomtel/Ligga",
    value: "SERCOMTEL/LIGGA",
  },
  {
    label: "Outras Operadoras",
    value: "OUTRAS_OPERADORAS",
  },
];

export const listCategory: Array<Options> = [
  {
    label: "Selecione uma categoria",
    value: "",
  },
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
];

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

export const listSituation: IRegisterAlertPhone = {
  value: "",
  list: [
    { _id: "ROUBO", value: "Roubo" },
    { _id: "FURTO", value: "Furto" },
    { _id: "PERDA", value: "Perda" },
  ],
  selectedList: [],
  error: "",
};

const listBrandOne: Array<Options> = [
  {
    value: "MOTOROLA",
    label: "Motorola",
  },
  {
    value: "MULTILASER",
    label: "Multilaser",
  },
  {
    value: "NOKIA",
    label: "Nokia",
  },
  {
    value: "POSITIVO",
    label: "Positivo",
  },
  {
    value: "SAMSUMG",
    label: "Samsung",
  },
  {
    value: "SIEMENS",
    label: "Siemens",
  },
  {
    value: "SONY",
    label: "Sony",
  },
  {
    value: "XIAOMI",
    label: "Xiaomi",
  },
  {
    value: "ZTE",
    label: "Zte",
  },
  {
    value: "OUTROS",
    label: "Outros",
  },
];

export const listBrand: Array<Options> = [
  {
    label: "Selecione uma marca",
    value: "",
  },
  {
    value: "ALCATEL",
    label: "Alcatel",
  },
  {
    value: "Apple",
    label: "Apple",
  },
  {
    value: "ASUS",
    label: "Asus",
  },
  {
    value: "BLACKBERRY",
    label: "BlackBerry",
  },
  {
    value: "BLU",
    label: "Blu",
  },
  {
    value: "HPE",
    label: "Hpe",
  },
  {
    value: "HUAWEI",
    label: "Huawei",
  },
  {
    value: "LENOVO",
    label: "Lenovo",
  },
  {
    value: "LG",
    label: "Lg",
  },
  {
    value: "MICROSOFT",
    label: "Microsoft",
  },
  ...listBrandOne,
];
