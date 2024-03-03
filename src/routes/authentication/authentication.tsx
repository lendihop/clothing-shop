import { FC } from 'react';

import { SignInForm } from 'components/sign-in-form/sign-in-form';
import { SignUpForm } from 'components/sign-up-form/sign-up-form';

import './authentication.styles.scss';

export const Authentication: FC = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};
