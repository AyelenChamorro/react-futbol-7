import React from 'react'
import {BgImagen} from '../../Componentes/BgImagen/BgImagen';
import {Header} from '../../Componentes/Header/Header'
import {SectionCards} from '../../Componentes/SectionCards/SectionCards'
import PaginationHome from '../../Componentes/Pagination/Pagination';
import SeccionPostales from '../../Componentes/SeccionPostales/SeccionPostales';

export const Home = () => {
    return (
      <div className="home">
        <Header />
        <BgImagen />
        <SectionCards />
        <PaginationHome/>
        <SeccionPostales/>  
      </div>
    );
  };