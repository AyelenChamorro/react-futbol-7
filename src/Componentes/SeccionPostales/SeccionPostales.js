import React from 'react';
import './SeccionPostales.scss';
import messi from '../../imagenes/messi.webp';

function SeccionPostales() {
  return (
    <div className=" container contenedor-postales">
      <div className="row m-0 d-flex">
        <div className="p-0 col text-center">
          <img className="postal " src={messi} alt="" />
        </div>
        <div className=" p-0 col text-center">
          <img className="postal " src={messi} alt="" />
        </div>
        <div className=" p-0 col text-center">
          <img className="postal " src={messi} alt="" />
        </div>
      </div>
    </div>
  );
}

export default SeccionPostales;
