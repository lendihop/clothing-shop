import {FC, InputHTMLAttributes} from "react";
import {FormInputLabel, Group, Input} from "./form-input.styles";


interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
}

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={Boolean(otherProps.value.length)}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};
