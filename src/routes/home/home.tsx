import {FC} from "react";
import {Outlet} from "react-router-dom";

import {Directory} from '../../components/directory/directory';

export const Home: FC = () => {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
};
