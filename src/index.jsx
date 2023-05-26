import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Footer from './Footer';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <header>
          <div className="logo" />
          <h1>Web o aplikaci Home Hub</h1>
        </header>
        <main>
          <p>
            Aplikace umožňuje uživatelům mít provoz své domácnosti snadno pod
            kontrolou.
          </p>
        </main>
      </div>

      <Footer />
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
