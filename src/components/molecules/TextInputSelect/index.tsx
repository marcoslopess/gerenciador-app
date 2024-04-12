import { Fragment } from "react";
import DropDown from "react-native-paper-dropdown";
import { Options } from "../../../utils/options";

interface ITextInputSelect {
  label: string;
  visible: boolean;
  showDropDown: () => void;
  onDismiss: () => void;
  value: string | number | null;
  setValue: (value: any) => void;
  list: Array<Options>;
  multiSelect?: boolean;
  errorLabel?: string;
}

export const TextInputSelect = ({ ...props }: ITextInputSelect) => {
  return (
    <Fragment>
      <DropDown
        multiSelect={props.multiSelect}
        label={props.label}
        visible={props.visible}
        showDropDown={props.showDropDown}
        onDismiss={props.onDismiss}
        value={props.value}
        setValue={props.setValue}
        list={props.list}
        inputProps={{
          width: "100%",
          borderBottomWidth: props.errorLabel ? 3 : 1,
          fontFamily: "Rawline-900",
        }}
      />
    </Fragment>
  );
};
