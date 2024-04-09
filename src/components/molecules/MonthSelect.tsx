import React, { useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

interface MonthSelectProps {
  selectedMonth: any;
  onMonthChange: any;
}

const MonthSelect: React.FC<MonthSelectProps> = ({ selectedMonth, onMonthChange }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [items, setItems] = useState([
    { value: 0, label: "Janeiro" },
    { value: 1, label: "Fevereiro" },
    { value: 2, label: "Março" },
    { value: 3, label: "Abril" },
    { value: 4, label: "Maio" },
    { value: 5, label: "Junho" },
    { value: 6, label: "Julho" },
    { value: 7, label: "Agosto" },
    { value: 8, label: "Setembro" },
    { value: 9, label: "Outubro" },
    { value: 10, label: "Novembro" },
    { value: 11, label: "Dezembro" },
  ]);
  return (
    <DropDownPicker
      open={open}
      value={selectedMonth}
      items={items}
      setOpen={setOpen}
      setValue={onMonthChange}
      setItems={setItems}
    />
  );
};

export default MonthSelect;
