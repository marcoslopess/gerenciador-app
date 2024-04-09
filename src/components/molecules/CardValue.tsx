import React, { useState } from "react";
import { Card, Text, Button } from "react-native-paper";

export type FinanceData = {
  value?: string;
  valueEdit?: number;
  category?: string;
  date?: string;
  formPayment?: string;
  description?: string;
  type?: string;
  typeFinance?: string;
};

export type PropsCardValue = {
  data: FinanceData;
};

const CardValue = ({ ...props }: PropsCardValue) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Card>
      <Card.Content>
        <Text
          style={{ color: props.data.typeFinance === "ENTRADA" ? "green" : "red" }}
          theme={{ colors: { primary: "green" } }}
          variant="titleLarge"
        >
          {props.data.value}
        </Text>
        <Text variant="bodyMedium">
          {props.data.category} - {props.data.date}
        </Text>
        <Card.Actions>
          <Button onPress={() => setIsVisible(!isVisible)}>Ver mais</Button>
        </Card.Actions>
        {isVisible && (
          <Card.Content>
            <Text variant="bodyMedium">{props.data.formPayment}</Text>
            <Text variant="bodyMedium">{props.data.description}</Text>
            <Text variant="bodyMedium">{props.data.type}</Text>
          </Card.Content>
        )}
      </Card.Content>
    </Card>
  );
};

export default CardValue;
