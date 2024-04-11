import React, { useCallback, useEffect, useState } from "react";
import { Keyboard, Platform, SafeAreaView, StatusBar, StyleSheet, TouchableWithoutFeedback, View } from "react-native";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import { TextInputDate } from "../../components/molecules/TextInputDate";
import { defaultDateFormat } from "../../utils/date";
import { TextInputSelect } from "../../components/molecules/TextInputSelect";
import { listCategory, listFormPayment, listType, listTypeFinance } from "../../utils/options";
import { Space } from "../../components/atoms/Space";
import { TextInputMask } from "react-native-masked-text";
import { useApi } from "../../context/FinancialRecord";
import { money } from "../../utils/money";
import { FinanceData } from "../../components/molecules/CardValue";
import { DatePickerInput } from "react-native-paper-dates";

const RegisterScreen = ({ navigation, route }: any) => {
  const [typeRegister, setTypeRegister] = useState("create");
  const { createRecord, fetchRecord, updateRecord, loading } = useApi();
  const [id, setId] = useState<any>("");
  const [date, setDate] = useState<Date>(new Date());
  const [category, setCategory] = useState<any>("");
  const [value, setValue] = useState<any>("");
  const [formPayment, setFormPayment] = useState<any>("");
  const [description, setDescription] = useState<any>("");
  const [type, setType] = useState<any>("");
  const [typeFinance, setTypeFinance] = useState<any>("");
  const [open, setOpen] = useState<boolean>(false);
  const [showDropDownCategory, setShowDropDownCategory] = useState<boolean>(false);
  const [showDropDownFormPayment, setShowDropDownFormPayment] = useState<boolean>(false);
  const [showDropDownType, setShowDropDownType] = useState<boolean>(false);
  const [showDropDownTypeFinance, setShowDropDownTypeFinance] = useState<boolean>(false);

  useEffect(() => {
    if (route.params?.paramKey?.id && route.params?.paramKey?.type && route.params?.paramKey?.type === "edit") {
      setTypeRegister("edit");
      const { id } = route.params?.paramKey;
      (async () => {
        const record: any = await fetchRecord(id);
        if (record !== undefined) {
          setId(record.id);
          setDate(new Date(record.date));
          setCategory(record.category);
          setValue(money(record.value));
          setFormPayment(record.formPayment);
          setDescription(record.description);
          setType(record.type);
          setTypeFinance(record.typeFinance);
        }
      })();
    }
  }, [route]);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params: { date: any }) => {
      setOpen(false);
      const newDate = new Date(params.date).setHours(0);
      console.log(new Date(newDate));

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

  const handleSaveRecord = async () => {
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
    if (route.params?.paramKey?.type === "edit") {
      await updateRecord(id, data);
    } else {
      await createRecord(data);
    }

    setDate(new Date());
    setCategory("");
    setValue("");
    setFormPayment("");
    setDescription("");
    setType("");
    setTypeFinance("");
    navigation.navigate("Home");
  };

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate || date;
    if (Platform.OS === "ios") {
      // Ajusta a data para o início do dia (00:00:000)
      currentDate.setHours(0, 1, 0, 0);
    }
    setDate(currentDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading && (
        <View style={{ height: "100%", display: "flex", justifyContent: "center" }}>
          <ActivityIndicator size="large" color="#3e2465" />
        </View>
      )}
      {!loading && (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View>
            {/* <TextInput
              label="Data"
              value={date === undefined ? "" : defaultDateFormat(date)}
              onPressIn={onPressOpenDate}
            /> */}
            <Space kind="bottom" size="10" />
            <Space kind="bottom" size="10" />
            <Space kind="bottom" size="10" />
            <DatePickerInput
              locale="pt"
              label="Birthdate"
              value={date}
              onChange={(d) => {
                const currentDate = d || date;
                if (Platform.OS === "ios") {
                  // Ajusta a data para o início do dia (00:00:000)
                  currentDate.setHours(1, 0, 0, 0);
                } else {
                  currentDate.setHours(0, 0, 0, 0);
                }

                setDate(currentDate);
              }}
              inputMode="start"
              validRange={{
                endDate: new Date(),
              }}
            />

            <Space kind="bottom" size="10" />
            <Space kind="bottom" size="10" />
            <Space kind="bottom" size="10" />
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
            {/* <TextInputDate visible={open} onDismiss={onDismissSingle} date={date} onConfirm={onConfirmSingle} /> */}

            <Button onPress={() => handleSaveRecord()} icon="content-save" mode="contained-tonal" style={styles.button}>
              SALVAR
            </Button>
            <Button
              onPress={() => {
                setDate(new Date());
                setCategory("");
                setValue("");
                setFormPayment("");
                setDescription("");
                setType("");
                setTypeFinance("");
                navigation.goBack();
              }}
              icon="arrow-left"
              mode="outlined"
              style={styles.buttonBack}
            >
              VOLTAR
            </Button>
          </View>
        </TouchableWithoutFeedback>
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
  buttonBack: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 10,
  },
});

export default RegisterScreen;
