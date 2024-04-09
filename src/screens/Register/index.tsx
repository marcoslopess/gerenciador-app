import React, { useCallback, useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { TextInputDate } from "../../components/molecules/TextInputDate";
import { defaultDateFormat } from "../../utils/date";
import { TextInputSelect } from "../../components/molecules/TextInputSelect";
import { listCategory, listFormPayment, listType, listTypeFinance } from "../../utils/options";
import { Space } from "../../components/atoms/Space";
import { TextInputMask } from "react-native-masked-text";
import { useApi } from "../../context/FinancialRecord";

const RegisterScreen = ({ navigation }: any) => {
  const { createRecord, loading } = useApi();
  const [date, setDate] = useState<any>();
  const [category, setCategory] = useState<string>("");
  const [value, setValue] = useState<string>("");
  const [formPayment, setFormPayment] = useState<string>("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState<string>("");
  const [typeFinance, setTypeFinance] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [showDropDownCategory, setShowDropDownCategory] = useState<boolean>(false);
  const [showDropDownFormPayment, setShowDropDownFormPayment] = useState<boolean>(false);
  const [showDropDownType, setShowDropDownType] = useState<boolean>(false);
  const [showDropDownTypeFinance, setShowDropDownTypeFinance] = useState<boolean>(false);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params: { date: Date | undefined }) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen]
  );

  const onPressOpenDate = useCallback(() => {
    setOpen(true);
  }, [setOpen]);

  const onShowDropDownCategory = useCallback(() => {
    setShowDropDownCategory(true);
  }, []);

  const onHideDropDownCategory = useCallback(() => {
    setShowDropDownCategory(false);
  }, []);

  const onChangeTextCategory = useCallback((value: string) => {
    setCategory(value);
  }, []);

  const onShowDropDownFormPayment = useCallback(() => {
    setShowDropDownFormPayment(true);
  }, []);

  const onHideDropDownFormPayment = useCallback(() => {
    setShowDropDownFormPayment(false);
  }, []);

  const onChangeTextFormPayment = useCallback((value: string) => {
    setFormPayment(value);
  }, []);

  const onShowDropDownType = useCallback(() => {
    setShowDropDownType(true);
  }, []);

  const onHideDropDownType = useCallback(() => {
    setShowDropDownType(false);
  }, []);

  const onChangeTextType = useCallback((value: string) => {
    setType(value);
  }, []);

  const onShowDropDownTypeFinance = useCallback(() => {
    setShowDropDownTypeFinance(true);
  }, []);

  const onHideDropDownTypeFinance = useCallback(() => {
    setShowDropDownTypeFinance(false);
  }, []);

  const onChangeTextTypeFinance = useCallback((value: string) => {
    setTypeFinance(value);
  }, []);

  const handleCreateRecord = async () => {
    const valueEdit = value.split("R$")[1].replace(".", "").replace(",", ".");
    const data = {
      date,
      category,
      value: parseFloat(valueEdit),
      formPayment,
      description,
      type,
      typeFinance,
    };

    await createRecord(data);
    setDate(undefined);
    setCategory("");
    setValue("");
    setFormPayment("");
    setDescription("");
    setType("");
    setTypeFinance("");
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={{ height: "100%", display: "flex", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#3e2465" />
        </View>
      )}
      {!loading && (
        <View>
          <TextInput
            label="Data"
            value={date === undefined ? "" : defaultDateFormat(date)}
            onPressIn={onPressOpenDate}
            editable={false}
          />
          <Space kind="bottom" size="10" />
          <TextInputSelect
            value={category}
            label="Categoria"
            visible={showDropDownCategory}
            showDropDown={onShowDropDownCategory}
            onDismiss={onHideDropDownCategory}
            setValue={onChangeTextCategory}
            list={listCategory}
          />
          <Space kind="bottom" size="10" />
          <TextInputMask
            type={"money"}
            options={{
              precision: 2,
              separator: ",",
              delimiter: ".",
              unit: "R$",
              suffixUnit: "",
            }}
            value={value}
            includeRawValueInChangeText={true}
            onChangeText={(maskedText, rawText) => {
              setValue(maskedText);
            }}
            customTextInput={TextInput}
            customTextInputProps={{
              label: "Valor",
              style: styles,
            }}
          />
          <Space kind="bottom" size="10" />
          <TextInputSelect
            value={formPayment}
            label="Forma de Pagamento"
            visible={showDropDownFormPayment}
            showDropDown={onShowDropDownFormPayment}
            onDismiss={onHideDropDownFormPayment}
            setValue={onChangeTextFormPayment}
            list={listFormPayment}
          />
          <Space kind="bottom" size="10" />
          <TextInput label={"Descrição"} value={description} onChangeText={(value: any) => setDescription(value)} />
          <Space kind="bottom" size="10" />
          <TextInputSelect
            value={type}
            label="Tipo"
            visible={showDropDownType}
            showDropDown={onShowDropDownType}
            onDismiss={onHideDropDownType}
            setValue={onChangeTextType}
            list={listType}
          />
          <Space kind="bottom" size="10" />
          <TextInputSelect
            value={typeFinance}
            label="Tipo de entrada"
            visible={showDropDownTypeFinance}
            showDropDown={onShowDropDownTypeFinance}
            onDismiss={onHideDropDownTypeFinance}
            setValue={onChangeTextTypeFinance}
            list={listTypeFinance}
          />
          <Space kind="bottom" size="10" />
          <TextInputDate visible={open} onDismiss={onDismissSingle} date={date} onConfirm={onConfirmSingle} />

          <Button onPress={() => handleCreateRecord()} icon="content-save" mode="contained-tonal" style={styles.button}>
            SALVAR
          </Button>
        </View>
      )}
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  button: {
    marginLeft: 100,
    marginRight: 100,
  },
});

export default RegisterScreen;
