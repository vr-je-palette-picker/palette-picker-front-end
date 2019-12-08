import React from 'react';

const PaletteCard = ({ palette }) => {
  
  return (
    <div>
      <p>{palette.palette_name}</p>
      <div>{palette.color_1}</div>
      <div>{palette.color_2}</div>
      <div>{palette.color_3}</div>
      <div>{palette.color_4}</div>
      <div>{palette.color_5}</div>
    </div>
  )
}

export default PaletteCard;
