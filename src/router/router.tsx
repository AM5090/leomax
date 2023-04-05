import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Empty from '../pages/Empty';
import Main from '../pages/Main';
import { useGetMenuQuery } from '../store/rtk';

import MainLayout from './MainLayout';


export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout/>}>
      <Route path="main" element={<Main/>}></Route>
      <Route path="*" element={<Empty/>} ></Route>
    </Route>,
  ),
);