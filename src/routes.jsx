import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import NoMatch from './pages/NotFound';
import Navbar from './pages/Navbar';
import Pages from './pages/Pages';
import Users from './pages/User';

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
        path: 'navbar',
        // Single route in lazy file
        element: <Navbar />,
      },
      {
        path: 'pages',
        // Single route in lazy file
        element: <Pages />,
      },
      {
        path: 'users',
        // Single route in lazy file
        element: <Users />,
      },
      {
        path: '*',
        element: <NoMatch />,
      },
    ],
  },
]);

export default router;
