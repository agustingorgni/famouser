import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import AppLayout from './layouts/AppLayout';
import List from './pages/List';
import Contact from './pages/Contact';
import './styles/index.scss';
import { DescriptionLoader, ListLoader, RootLoader } from './loaders';
import Description from './pages/Description';
import { Home } from './pages/Home';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<AppLayout />} loader={RootLoader}>
    <Route index element={<Home />} title="test" />
    <Route path='stars' element={<List />} loader={ListLoader} />
    <Route path='stars/:name' element={<Description />} loader={DescriptionLoader} />
    <Route path='contact' element={<Contact />} />
    <Route path='*' element={<div>Error</div>} />
  </Route>
));

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
)
