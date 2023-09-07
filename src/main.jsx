import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './layouts/AppLayout';
import List from './pages/List';
import { DescriptionLoader, FavoritesLoader, ListLoader } from './loaders';
import { LoginAction } from './actions';
import { Description } from './pages/Description';
import { Home } from './pages/Home';

import './styles/index.scss';
import { Error as ErrorPage } from './pages/Error';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import Signup from './pages/Signup';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/famouser/" element={<Home />} />
    <Route path='/famouser/stars' element={<List />} errorElement={<ErrorPage />} loader={ListLoader} />
    <Route path='/famouser/stars/:name' element={<Description />} errorElement={<ErrorPage />} loader={DescriptionLoader} />
    <Route path='/famouser/favorites' element={<Favorites />} loader={FavoritesLoader} />
    <Route path='/famouser/login' element={<Login />} action={LoginAction} />
    <Route path='/famouser/signup' element={<Signup />} />
    <Route path='/famouser/*' element={<ErrorPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
