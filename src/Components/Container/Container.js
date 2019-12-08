import React from 'react';
import ColorCard from './../ColorCard/ColorCard.js';

const Container = ({ hexCodes }) => {
  const colorCards = hexCodes.map(hex => {
    return <ColorCard hex={hex}/>
  })

  return (
    <main>
      <section>
          { colorCards }
        </section>
    </main>
  )
}

export default Container;