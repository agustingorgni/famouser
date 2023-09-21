import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import React from 'react';

import AppLayout from './layouts/AppLayout';
import List from './pages/List';
import {
  DescriptionLoader,
  ListLoader,
  FavoritesLoader
} from './loaders';
import {
  LoginAction,
  SignupAction,
  DescriptionAction,
  FavoritesAction,
  HomeAction,
  AppLayoutAction
} from './actions';
import { Description } from './pages/Description';
import { Home } from './pages/Home';

import './styles/index.scss';
import { Error as ErrorPage } from './pages/Error';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import Signup from './pages/Signup';
import { FamouserProvider } from './providers/FamouserProvider';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />} action={AppLayoutAction}>
    <Route path="/famouser/" element={<Home />} action={HomeAction} />
    <Route path='/famouser/stars' element={<List />} errorElement={<ErrorPage />} loader={ListLoader} />
    <Route path='/famouser/stars/:name' element={<Description />} errorElement={<ErrorPage />} loader={DescriptionLoader} action={DescriptionAction} />
    <Route path='/famouser/favorites' element={<Favorites />} errorElement={<ErrorPage />} loader={FavoritesLoader} action={FavoritesAction} />
    <Route path='/famouser/login' element={<Login />} action={LoginAction} errorElement={<ErrorPage />} />
    <Route path='/famouser/signup' element={<Signup />} action={SignupAction} errorElement={<ErrorPage />} />
    <Route path='/famouser/*' element={<ErrorPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <FamouserProvider>
    <RouterProvider router={router} />
  </FamouserProvider>,
)
