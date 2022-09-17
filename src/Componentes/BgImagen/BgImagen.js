import React from 'react';
import bgimage from '../../imagenes/canchas-f7.jpg';

import './BgImagen.scss';

export const BgImagen = () => {
  return (
    <div>
      <img className="bgimagen" src={bgimage} alt="" />
    </div>
  );
};
