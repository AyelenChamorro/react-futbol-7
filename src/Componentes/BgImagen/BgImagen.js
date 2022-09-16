import React from 'react';
import bgimagen from '../../imagenes/canchas-f7.jpg';
import "./BgImagen.scss";

function BgImagen() {
  return (
    <div>
        <img className="bgimagen" src={bgimagen}>

        </img>
    </div>
  )
}

export default BgImagen