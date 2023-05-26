import {FC} from 'react';

import { Routes, Route } from 'react-router-dom';

import {Home} from './routes/home/home';
import {Navigation} from './routes/navigation/navigation';
import {Authentication} from "./routes/authentication/authentication";

import './App.css';

const Shop = () => {
  return <h1>I am the shop page</h1>;
};

export const App: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
}
