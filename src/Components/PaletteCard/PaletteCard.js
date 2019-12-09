import React from 'react';
import './PaletteCard.scss'

const PaletteCard = ({ palette }) => {
  return (
    <div className='PaletteCard'>
      <p className='PaletteCard__p--palette-name'>{palette.palette_name}</p>
      <div
        className='PaletteCard__div--color'
        style={{ backgroundColor: palette.color_1 }}
      >
        {palette.color_1}
      </div>
      <div
        className='PaletteCard__div--color'
        style={{ backgroundColor: palette.color_2 }}
      >
        {palette.color_2}
      </div>
      <div
        className='PaletteCard__div--color'
        style={{ backgroundColor: palette.color_3 }}
      >
        {palette.color_3}
      </div>
      <div
        className='PaletteCard__div--color'
        style={{ backgroundColor: palette.color_4 }}
      >
        {palette.color_4}
      </div>
      <div
        className='PaletteCard__div--color'
        style={{ backgroundColor: palette.color_5 }}
      >
        {palette.color_5}
      </div>
    </div>
  );
};

export default PaletteCard;
