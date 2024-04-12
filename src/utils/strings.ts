import { listCategory, listFormPayment, listType } from "./options";

export const getCategory = (category: any) => {
  if (listCategory.filter((item) => item.value === category).length > 0) {
    return listCategory.filter((item) => item.value === category)[0].label;
  }
  return "";
};

export const getFormPayment = (formPayment: any) => {
  if (listFormPayment.filter((item) => item.value === formPayment).length > 0) {
    return listFormPayment.filter((item) => item.value === formPayment)[0].label;
  }
  return "";
};

export const getType = (type: any) => {
  if (listType.filter((item) => item.value === type).length > 0) {
    return listType.filter((item) => item.value === type)[0].label;
  }
  return "";
};

export const getCategoryChart = (category: any) => {
  if (listCategory.filter((item) => item.value === category).length > 0) {
    return listCategory.filter((item) => item.value === category)[0].label.replace(" ", "\n");
  }
  return "";
};
