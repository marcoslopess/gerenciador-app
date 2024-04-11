import { MaskService } from "react-native-masked-text";

export const money = (value: any) => {
  return MaskService.toMask("money", value, {
    precision: 2,
    separator: ",",
    delimiter: ".",
    unit: "R$ ",
    suffixUnit: "",
  });
};
