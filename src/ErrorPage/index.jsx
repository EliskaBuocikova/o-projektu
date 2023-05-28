import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main/Main';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <Main
        text={'Nenapsal/a jsi do URL nějaký nesmysl? Zkus to ještě jednou...'}
      />
      <Footer text="Czechitas, Digitální akademie: Web - jaro 2023" />
    </>
  );
};

export default ErrorPage;
