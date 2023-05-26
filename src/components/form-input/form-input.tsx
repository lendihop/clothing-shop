import {FC, InputHTMLAttributes} from "react";

import './form-input.styles.scss';

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label: string;
}

export const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};
