import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const CustomLink = ({ link }) => {

  const [showLink, setShowLink] = useState(false);
  
  return (
    <li
      className="dropdrown"
      key={link.key}
      onMouseEnter={() => {
        setShowLink(true);
      }}
      onMouseLeave={() => {
        setShowLink(false);
      }}
      onClick={() => {
        setShowLink(true);
      }}
    >
      <div className="dropbtn">{link.name}</div>
      {link.name === link.key && (
        <div
          class={`dropdown-content child ${
            showLink && link.name === link.key ? '' : 'd-none'
          }`}
          onMouseLeave={() => setShowLink(false)}
        >
          <ul>
            {link.sublinks.map((sublink) => (
              <li className="dropdrown">
                <Link to={sublink.url}>{sublink.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
};
