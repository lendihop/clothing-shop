import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react";

import './button.styles.scss';

enum BUTTON_TYPE_CLASSNAMES {
  GOOGLE = 'google-sign-in',
  INVERTED = 'inverted'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTypeClassName?: BUTTON_TYPE_CLASSNAMES;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, buttonTypeClassName, ...otherProps }) => {
  return (
    <button
      className={`button-container ${buttonTypeClassName}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};
