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
      <div className="container">
        <header>
          <div className="logo" />
        </header>
        <Main
          text="Aplikace umožňuje uživatelům mít provoz své domácnosti snadno pod
      kontrolou."
        />
      </div>

      <Footer text="Czechitas, Digitální akademie: Web - jaro 2023" />
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
