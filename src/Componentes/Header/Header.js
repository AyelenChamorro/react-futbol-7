import React from "react";
import "./Header.scss";
import logo from "../../imagenes/logo.png";
import Navbar  from "../../Componentes/Navbar/Navbar";
import BgImagen from "../BgImagen/BgImagen";

export const Header = () => {
  return (
    <div className="container container-header">
      <div className="bg-light-blue"></div>
      <div className="bg-blue">
       
        <div className="container-logo d-flex ">
          <img className="logo" src={logo} alt="" />
        </div>
      
        <Navbar/>
   
      </div>
      <BgImagen/>
    </div>
    
  );
};
