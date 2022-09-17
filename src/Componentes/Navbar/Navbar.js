import React from 'react';
import '../Navbar/Navbar.scss';
import { DropDownHover } from './DropDownHover/DropDownHover';
import useNavbar from './useNavbar';

function Navbar() {
  const links = useNavbar();

  return (
    <div className="navbar ">
      {links.map((link, key) => (
        <DropDownHover
          name={link.name}
          links={link.links}
          key={key}
          linkKey={link.name}
        />
      ))}
    </div>
  );
}

export default Navbar;
