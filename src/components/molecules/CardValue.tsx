import React, { useState } from "react";
import { View } from "react-native";
import { MaskService } from "react-native-masked-text";
import { Card, Text, Button, Avatar, IconButton } from "react-native-paper";
import { money } from "../../utils/money";
import { defaultDateFormat } from "../../utils/date";
import { getCategory, getFormPayment, getType } from "../../utils/strings";

export type FinanceData = {
  id?: string;
  value?: string;
  valueEdit?: number;
  category?: string;
  date: string;
  formPayment?: string;
  description?: string;
  type?: string;
  typeFinance?: string;
};

export type PropsCardValue = {
  data: FinanceData;
  navigation?: any;
};

const CardValue = ({ data, navigation }: PropsCardValue) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Card style={{ marginLeft: 1, marginRight: 1, marginVertical: 1 }}>
      <Card.Title
        title={
          <Text
            style={{ color: data.typeFinance === "ENTRADA" ? "green" : "red" }}
            theme={{ colors: { primary: "green" } }}
            variant="titleLarge"
          >
            {money(data.value)}
          </Text>
        }
        subtitle={
          <Text variant="bodyMedium">
            {getCategory(data.category)} - {defaultDateFormat(data.date)}
          </Text>
        }
        left={(props: any) => (
          <IconButton
            {...props}
            size={24}
            icon="plus"
            onPress={() => setIsVisible(!isVisible)}
            style={{ marginLeft: 0 }}
          />
        )}
        right={(props: any) => (
          <IconButton
            {...props}
            icon="pencil"
            onPress={() => navigation.navigate("Register", { paramKey: { id: data.id, type: "edit" } })}
          />
        )}
      />
      {isVisible && (
        <Card.Content>
          {data.formPayment && <Text variant="bodyMedium">Forma de pagamento: {getFormPayment(data.formPayment)}</Text>}
          {data.description && <Text variant="bodyMedium">Descrição: {data.description}</Text>}
          {data.type && <Text variant="bodyMedium">Tipo: {getType(data.type)}</Text>}
        </Card.Content>
      )}
    </Card>
  );
};

export default CardValue;
