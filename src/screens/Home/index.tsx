import React, { useEffect, useState } from "react";
import {
  View,
  SectionList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  RefreshControl,
} from "react-native";
import MonthSelect from "../../components/molecules/MonthSelect";
import { TextInput, Text, IconButton, Button } from "react-native-paper";
import CardValue from "../../components/molecules/CardValue";
import { useApi } from "../../context/FinancialRecord";

const wait = (timeout: any) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const HomeScreen = ({ navigation }: any) => {
  const { records, loading, fetchRecords } = useApi();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    fetchRecords();
    wait(200).then(() => setRefreshing(false)); // Simula um delay de 2 segundos
  }, []);
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
      <Button
        mode="contained"
        onPress={() => navigation.navigate("Register", { paramKey: { type: "create" } })}
        style={{ marginBottom: 5 }}
      >
        Criar novo registro
      </Button>
      <Text>Mês</Text>
      <MonthSelect selectedMonth={month} onMonthChange={setMonth} />
      <TextInput label={"Saldo Inicial"} value={inicialValue} onChangeText={(value: any) => setInicialValue(value)} />
      <Text>Total de gastos: {totalExpenses}</Text>
      <Text>Total de entradas: {totalEntries}</Text>
      <Text>Saldo final: {finalBalance}</Text>
      <FlatList
        data={records}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <CardValue data={item} navigation={navigation} />
          </View>
        )}
        keyExtractor={(item: any) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
      {/* <SectionList
        sections={DATA}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <CardValue data={item} navigation={navigation} />
          </View>
        )}
      /> */}
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
