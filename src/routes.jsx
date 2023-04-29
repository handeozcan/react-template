import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './pages/Home';
import NoMatch from './pages/NotFound';
import Navbar from './pages/Navbar';
import Pages from './pages/Pages';
import Users from './pages/User';
import News from './pages/News';
import MainAnimation from './pages/MainAnimation';
import Login from './pages/Login';

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
        path: 'home',
        children: [
          {
            path: 'news',
            element: <News />,
          },

          {
            path: 'main-animation',
            element: <MainAnimation />,
          },
        ],
      },
      {
        path: 'navbar',
        element: <Navbar />,
      },
      {
        path: 'pages',
        element: <Pages />,
      },
      {
        path: 'users',
        element: <Users />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <NoMatch />,
  },
]);

export default router;
