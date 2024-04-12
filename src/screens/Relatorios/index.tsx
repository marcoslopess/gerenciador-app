import React, { useEffect, useState, useCallback } from "react";
import { useApi } from "../../context/FinancialRecord";
import { currentMonth } from "../../utils/date";
import { FlatList, RefreshControl, SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { wait } from "../../utils/others";
import { TextInputSelect } from "../../components/molecules/TextInputSelect";
import { listMonth } from "../../utils/options";
import { ChartBar, ChartPie } from "../../components/organisms/Chart";

const RelatoriosScreen = () => {
  const { fetchfinancialCharts, charts } = useApi();
  const [refreshing, setRefreshing] = useState(false);
  const [month, setMonth] = useState(currentMonth);
  const [showDropDownMonth, setShowDropDownMonth] = useState<boolean>(false);

  const onRefresh = React.useCallback(() => {
    setMonth(currentMonth);
    setRefreshing(true);
    fetchfinancialCharts(currentMonth());
    wait(200).then(() => setRefreshing(false)); // Simula um delay de 2 segundos
  }, []);
  useEffect(() => {
    fetchfinancialCharts(month);
  }, []);

  const onShowDropDownMonth = useCallback(() => {
    setShowDropDownMonth(true);
  }, []);

  const onHideDropDownMonth = useCallback(() => {
    setShowDropDownMonth(false);
  }, []);

  const onChangeTextMonth = useCallback((value: number) => {
    setMonth(value);
    fetchfinancialCharts(value);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={charts}
        ListHeaderComponent={
          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <TextInputSelect
              value={month}
              label="Mês"
              visible={showDropDownMonth}
              showDropDown={onShowDropDownMonth}
              onDismiss={onHideDropDownMonth}
              setValue={onChangeTextMonth}
              list={listMonth}
            />
          </View>
        }
        renderItem={({ item }) => (
          <View>
            {item.type === "bar" ? (
              <ChartBar record={item} />
            ) : (
              <ChartPie record={item} defaultColor={item.title !== "Tipo das despesas"} />
            )}
          </View>
        )}
        keyExtractor={(item: any) => item.title}
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
  scrollView: {
    flex: 1,
    height: StatusBar.currentHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default RelatoriosScreen;
