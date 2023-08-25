import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

import AppLayout from './layouts/AppLayout';
import List from './pages/List';
import Contact from './pages/Contact';
import { DescriptionLoader, ListLoader } from './loaders';
import { Description } from './pages/Description';
import { Home } from './pages/Home';

import './styles/index.scss';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />}>
    <Route path="/famouser" element={<Home />} title="test" />
    <Route path='/famouser/stars' element={<List />} loader={ListLoader} />
    <Route path='/famouserstars/:name' element={<Description />} loader={DescriptionLoader} />
    <Route path='/famousercontact' element={<Contact />} />
    <Route path='/famouser/*' element={<div>Error</div>} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
