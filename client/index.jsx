import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './template/styles.css';
import './template/layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './routes/root';
import Auth from './routes/auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
  },
  {
    path: 'auth',
    element: <Auth />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />,
);
