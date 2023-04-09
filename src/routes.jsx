import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import NoMatch from './pages/NotFound';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        // Single route in lazy file
        element: <About />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);

export default router;
