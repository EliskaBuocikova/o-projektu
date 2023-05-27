import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';
import './style.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main/Main';
import Eliska from './Eliska';
import { Daniela } from './Daniela';
import Tereza from './Tereza';

const App = () => {
  return (
    <>
      <Header />
      <Main
        text="Aplikace umožňuje uživatelům mít provoz své domácnosti snadno pod
      kontrolou."
      />
      <nav>
        <Link to="/daniela">Daniela</Link>
        <span> | </span>
        <Link to="/eliska">Eliška</Link>
        <span> | </span>
        <Link to="/tereza">Tereza</Link>
      </nav>
      <Outlet />
      <Footer text="Czechitas, Digitální akademie: Web - jaro 2023" />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'eliska',
        element: <Eliska />,
      },
      {
        path: 'daniela',
        element: <Daniela />,
      },
      {
        path: 'tereza',
        element: <Tereza />,
      },
    ],
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
