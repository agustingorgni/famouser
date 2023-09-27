import ReactDOM from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';
import React from 'react';

import { AppLayout } from './layouts';
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
} from './actions';
import { Description } from './pages/Description';
import { Home } from './pages/Home';

import './styles/index.scss';
import { Error as ErrorPage } from './pages/Error';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { FamouserProvider } from './providers/FamouserProvider';
import { DESCRIPTION, FAVORITES, INDEX, LIST, LOGIN, SIGNUP } from './utils/enums/links';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path={INDEX} element={<Home />} action={HomeAction} />
    <Route path={LIST} element={<List />} errorElement={<ErrorPage />} loader={ListLoader} />
    <Route path={DESCRIPTION} element={<Description />} errorElement={<ErrorPage />} loader={DescriptionLoader} action={DescriptionAction} />
    <Route path={FAVORITES} element={<Favorites />} errorElement={<ErrorPage />} loader={FavoritesLoader} action={FavoritesAction} />
    <Route path={LOGIN} element={<Login />} action={LoginAction} errorElement={<ErrorPage />} />
    <Route path={SIGNUP} element={<Signup />} action={SignupAction} errorElement={<ErrorPage />} />
    <Route path={`${INDEX}*`} element={<ErrorPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <FamouserProvider>
    <RouterProvider router={router} />
  </FamouserProvider>,
)
