import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import LandingPage from '../pages/LandingPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/chat',
    element: <MainPage />,
  },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
