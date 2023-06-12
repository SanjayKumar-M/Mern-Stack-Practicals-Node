import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Packages from './Pages/Packages';

const route = createBrowserRouter([
  {
    path: '/',
    element: <App />

  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/packages",
    element:<Packages />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={route}/>
);

