import { FC } from 'react';

import { SpinnerContainer, SpinnerOverlay } from './spinner.styles';

export const Spinner: FC = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);
