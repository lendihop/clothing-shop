import React, {FC} from 'react';
import { Routes, Route } from 'react-router-dom';
import {Home} from './routes/home';
import './App.css';

export interface Category {
  id: number;
  title: string;
  imageUrl: string;
}

export const App: FC = () => {
  return <Routes>
    <Route path='/' index element={<Home />} />
  </Routes>;
}
