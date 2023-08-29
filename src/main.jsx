import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './layouts/AppLayout';
import List from './pages/List';
import { DescriptionLoader, ListLoader } from './loaders';
import { Description } from './pages/Description';
import { Home } from './pages/Home';

import './styles/index.scss';
import { Error as ListError } from './pages/List/Error';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/famouser" element={<Home />} title="test" />
    <Route path='/famouser/stars' element={<List />} errorElement={<ListError />} loader={ListLoader} />
    <Route path='/famouser/stars/:name' element={<Description />} loader={DescriptionLoader} />
    <Route path='/famouser/*' element={<div>Error</div>} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
