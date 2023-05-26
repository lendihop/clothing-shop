import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";

import './button.styles.scss';

export enum BUTTON_TYPES {
  GOOGLE = 'google-sign-in',
  INVERTED = 'inverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: BUTTON_TYPES;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, buttonType, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonType}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
