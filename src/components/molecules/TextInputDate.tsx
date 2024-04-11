import { DatePickerModal } from "react-native-paper-dates";
import { Fragment } from "react";

type PropsTextInputDate = {
  visible: boolean;
  onDismiss: () => void;
  onConfirm: (params: { date: Date | undefined }) => void;
  date: Date | undefined;
};

export const TextInputDate = ({ ...props }: PropsTextInputDate) => {
  let currentDate = new Date();
  console.log(currentDate);

  return (
    <Fragment>
      <DatePickerModal
        {...props}
        mode="single"
        date={props.date}
        locale="pt"
        validRange={{
          endDate: currentDate,
        }}
        onConfirm={props.onConfirm}
      />
    </Fragment>
  );
};
