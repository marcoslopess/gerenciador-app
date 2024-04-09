import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const defaultDateFormat = (date?: Date | number) => format(date ?? Date.now(), `dd/MM/yyyy`, { locale: ptBR });

export const defaultGetDate = (date?: Date | number) => format(date ?? Date.now(), `dd`, { locale: ptBR });

export const formatUS = (date?: Date) => format(date ?? Date.now(), `yyyy-MM-dd`, { locale: ptBR });
