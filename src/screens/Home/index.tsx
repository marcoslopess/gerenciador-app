import React, { useEffect, useState } from "react";
import { View, SectionList, SafeAreaView, StatusBar, StyleSheet, ActivityIndicator } from "react-native";
import MonthSelect from "../../components/molecules/MonthSelect";
import { TextInput, Text } from "react-native-paper";
import CardValue from "../../components/molecules/CardValue";
import { useApi } from "../../context/FinancialRecord";

const HomeScreen = () => {
  const { records, loading, fetchRecords } = useApi();
  const DATA = [
    {
      data: records,
    },
  ];
  useEffect(() => {
    // Busca os registros quando o componente monta
    fetchRecords();
  }, []);

  const [month, setMonth] = useState(null);
  const [inicialValue, setInicialValue] = useState();
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const [finalBalance, setFinalBalance] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Mês</Text>
      <MonthSelect selectedMonth={month} onMonthChange={setMonth} />
      <TextInput label={"Saldo Inicial"} value={inicialValue} onChangeText={(value: any) => setInicialValue(value)} />
      <Text>Total de gastos: {totalExpenses}</Text>
      <Text>Total de entradas: {totalEntries}</Text>
      <Text>Saldo final: {finalBalance}</Text>
      <SectionList
        sections={DATA}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <CardValue data={item} />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    marginVertical: 2,
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
  },
});

export default HomeScreen;
