import React, { useState } from 'react';
import { CustomLink } from './CustomLink';

import './DropDownHover.scss';

export const DropDownHover = ({ name, links }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      class="dropdown"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <button class="dropbtn">{name}</button>
      <div
        class={`dropdown-content ${show ? '' : 'd-none'}`}
        onMouseLeave={() => setShow(false)}
      >
        <ul>
          {links.map((link) => (
            <CustomLink link={link} />
          ))}
        </ul>
      </div>
    </div>
  );
};
