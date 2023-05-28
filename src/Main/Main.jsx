import React from 'react';
import './style.css';


const Main = ({text}) => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
      </header>
      <p>{text}</p>
    </div>
  );
};

export default Main;
