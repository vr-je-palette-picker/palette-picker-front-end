import React from 'react';

const PaletteCard = ({ palette }) => {
  
  return (
    <div>
      <p>{palette.palette_name}</p>
      <div style={{backgroundColor: palette.color_1}}>{palette.color_1}</div>
      <div style={{backgroundColor: palette.color_2}}>{palette.color_2}</div>
      <div style={{backgroundColor: palette.color_3}}>{palette.color_3}</div>
      <div style={{backgroundColor: palette.color_4}}>{palette.color_4}</div>
      <div style={{backgroundColor: palette.color_5}}>{palette.color_5}</div>
    </div>
  )
}

export default PaletteCard;
