import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Footer from './Footer';
import Header from './Header';
import Main from './Main/Main';

const App = () => {
  return (
    <>
      <Header />
      <Main
        text="Aplikace umožňuje uživatelům mít provoz své domácnosti snadno pod
      kontrolou."
      />
      <Footer text="Czechitas, Digitální akademie: Web - jaro 2023" />
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
