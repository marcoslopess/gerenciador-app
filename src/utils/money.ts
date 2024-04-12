import { MaskService } from "react-native-masked-text";

export const money = (value: any) => {
  const isNegative = value < 0;
  const absoluteValue: any = Math.abs(value);

  const maskedValue = MaskService.toMask("money", absoluteValue, {
    precision: 2,
    separator: ",",
    delimiter: ".",
    unit: isNegative ? "R$ -" : "R$ ",
    suffixUnit: "",
  });

  return maskedValue;
};
