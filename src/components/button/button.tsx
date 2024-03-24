import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';

import { BaseButton, GoogleSignInButton, InvertedButton, LoadingSpinner } from './button.styles';

export enum BUTTON_TYPES {
  BASE = 'base',
  GOOGLE = 'google-sign-in',
  INVERTED = 'inverted'
}

const getButton = (buttonType = BUTTON_TYPES.BASE) =>
  ({
    [BUTTON_TYPES.BASE]: BaseButton,
    [BUTTON_TYPES.GOOGLE]: GoogleSignInButton,
    [BUTTON_TYPES.INVERTED]: InvertedButton
  })[buttonType];

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  buttonType?: BUTTON_TYPES;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  children,
  buttonType,
  isLoading = false,
  ...otherProps
}) => {
  const CustomButton = getButton(buttonType);
  return (
    <CustomButton disabled={isLoading} {...otherProps}>
      {isLoading ? <LoadingSpinner /> : children}
    </CustomButton>
  );
};
