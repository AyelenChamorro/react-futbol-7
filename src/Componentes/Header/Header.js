import React from 'react';
import './Header.scss';
import Navbar from '../../Componentes/Navbar/Navbar';

export const Header = () => {
  return (
    <div className="p-0 position-fixed container container-header">
      <div className=" bg-light-blue"></div>
      <div className="row bg-blue">
        <div className="col-2 container-logo d-flex align-items-center justify-content-center">
          {/* <img className="logo" src={logo} alt="" /> */}
          <h2>Pepa F8</h2>
        </div>
        <div className="col d-flex justify-content-start">
          <Navbar />
        </div>
      </div>
    </div>
  );
};
