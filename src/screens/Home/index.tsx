import React, { useCallback, useEffect, useState } from "react";
import { View, SafeAreaView, StatusBar, StyleSheet, FlatList, RefreshControl } from "react-native";
import { TextInput, Text, Button } from "react-native-paper";
import CardValue from "../../components/molecules/CardValue";
import { useApi } from "../../context/FinancialRecord";
import { TextInputSelect } from "../../components/molecules/TextInputSelect";
import { listMonth } from "../../utils/options";
import { currentMonth } from "../../utils/date";
import { TextInputMask } from "react-native-masked-text";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { money } from "../../utils/money";
import { wait } from "../../utils/others";

const HomeScreen = ({ navigation }: any) => {
  const { records, fetchRecords } = useApi();
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setMonth(currentMonth);
    setRefreshing(true);
    fetchRecords(month);
    wait(20).then(() => setRefreshing(false)); // Simula um delay de 2 segundos
  }, []);
  useEffect(() => {
    // Busca os registros quando o componente monta
    fetchRecords(month);
  }, []);

  const [month, setMonth] = useState(currentMonth);
  const [openingBalance, setOpeningBalance] = useState<any>("0");
  const [showDropDownMonth, setShowDropDownMonth] = useState<boolean>(false);

  const onShowDropDownMonth = useCallback(() => {
    setShowDropDownMonth(true);
  }, []);

  const onHideDropDownMonth = useCallback(() => {
    setShowDropDownMonth(false);
  }, []);

  const onChangeTextMonth = useCallback((value: number) => {
    setMonth(value);
    fetchRecords(value);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={records.values}
        ListHeaderComponent={
          <View>
            <Button
              mode="contained"
              onPress={() => navigation.navigate("Register", { paramKey: { type: "create" } })}
              style={{ marginBottom: 10, marginRight: 100, marginLeft: 100 }}
            >
              Criar novo registro
            </Button>
            {/* <MonthSelect selectedMonth={month} onMonthChange={setMonth} /> */}
            <TextInputSelect
              value={month}
              label="Mês"
              visible={showDropDownMonth}
              showDropDown={onShowDropDownMonth}
              onDismiss={onHideDropDownMonth}
              setValue={onChangeTextMonth}
              list={listMonth}
            />
            <TextInputMask
              type={"money"}
              options={{
                precision: 2,
                separator: ",",
                delimiter: ".",
                unit: "R$",
                suffixUnit: "",
              }}
              value={openingBalance}
              includeRawValueInChangeText={true}
              onChangeText={async (maskedText, rawText) => {
                setOpeningBalance(maskedText);
                const openingBalanceEdit = parseFloat(maskedText.split("R$")[1].replace(".", "").replace(",", "."));
                await AsyncStorage.setItem("openingBalance", openingBalanceEdit.toString());
                fetchRecords(month);
              }}
              customTextInput={TextInput}
              customTextInputProps={{
                label: "Saldo Inicial",
                style: styles,
              }}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 5 }}>
              <Text variant="titleMedium" style={{ color: "green" }}>
                Entradas: {money(records.totalEntries)}
              </Text>
              <Text variant="titleMedium" style={{ color: "red" }}>
                Gastos: {money(records.totalExpenditure)}
              </Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 5 }}>
              <Text
                variant="titleMedium"
                style={{
                  color: parseFloat(records.finalBalance) < 0 ? "red" : "green",
                }}
              >
                Saldo final:{money(records.finalBalance)}
              </Text>
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View style={styles.item}>
            <CardValue data={item} navigation={navigation} />
          </View>
        )}
        keyExtractor={(item: any) => item.id}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
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
  scrollView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
