import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './layouts/AppLayout';
import List from './pages/List';
import { DescriptionLoader, ListLoader } from './loaders';
import { LoginAction, SignupAction, DescriptionAction } from './actions';
import { Description } from './pages/Description';
import { Home } from './pages/Home';

import './styles/index.scss';
import { Error as ErrorPage } from './pages/Error';
import { Favorites } from './pages/Favorites';
import { Login } from './pages/Login';
import Signup from './pages/Signup';
import { FamouserProvider } from './providers/FamouserProvider';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/famouser/" element={<Home />} />
    <Route path='/famouser/stars' element={<List />} errorElement={<ErrorPage />} loader={ListLoader} />
    <Route path='/famouser/stars/:name' element={<Description />} errorElement={<ErrorPage />} loader={DescriptionLoader} action={DescriptionAction} />
    <Route path='/famouser/favorites' element={<Favorites />} />
    <Route path='/famouser/login' element={<Login />} action={LoginAction} />
    <Route path='/famouser/signup' element={<Signup />} action={SignupAction} />
    <Route path='/famouser/*' element={<ErrorPage />} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <FamouserProvider>
    <RouterProvider router={router} />
  </FamouserProvider>,
)
