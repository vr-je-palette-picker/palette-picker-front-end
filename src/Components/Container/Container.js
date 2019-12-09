import React from 'react';
import ColorCard from './../ColorCard/ColorCard.js';
import './Container.scss';

const Container = ({ hexCodes }) => {
  const colorCards = hexCodes.map((hex, index) => {
    return <ColorCard key={index} hex={hex} />;
  });

  return (
    <main className='Container'>
      <section className='Container__section'>{colorCards}</section>
    </main>
  );
};

export default Container;
