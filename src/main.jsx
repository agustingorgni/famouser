import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './layouts/AppLayout';
import List from './pages/List';
import Contact from './pages/Contact';
import './styles/index.scss';
import { ListLoader, RootLoader } from './loaders';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />} loader={RootLoader}>
    <Route path='list' element={<List />} loader={ListLoader} />
    <Route path='contact' element={<Contact />} />
    <Route path='*' element={<div>Error</div>} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
