import { PaperSelect } from "react-native-paper-select";
import { Fragment } from "react";
import { WrapperError } from "./styles";
import { Text } from "../../atoms/Text";

type PropsTextInputSelectDropdown = {
  label: string;
  value: string;
  onSelection: (value: any) => void;
  arrayList: Array<{ _id: string; value: string }>;
  selectedArrayList: Array<{ _id: string; value: string }>;
  errorLabelInfo?: any;
  multiEnable?: boolean;
  hideSearchBox?: boolean;
  borderBottom?: number;
  disabled?: boolean;
};

export const TextInputSelectDropdown = ({ ...props }: PropsTextInputSelectDropdown) => {
  return (
    <Fragment>
      <PaperSelect
        label={props.label}
        disabled={props.disabled || false}
        hideSearchBox={props.hideSearchBox}
        dialogDoneButtonText="Confirmar"
        dialogTitle="Selecione uma opção"
        searchText="Pesquisar"
        dialogCloseButtonText="Fechar"
        selectAllText="Selecionar todos"
        value={props.value}
        onSelection={props.onSelection}
        arrayList={props.arrayList}
        selectedArrayList={props.selectedArrayList}
        multiEnable={props.multiEnable || false}
      />
      {!!props.errorLabelInfo && (
        <WrapperError>
          <Text size="xxTiny" color="danger">
            {props.errorLabelInfo}
          </Text>
        </WrapperError>
      )}
    </Fragment>
  );
};
