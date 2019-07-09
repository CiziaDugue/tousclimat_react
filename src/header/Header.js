import React from 'react';
import logo from './logo.png'; // Tell Webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Header() {
  // Import result is the URL of your image
  return (
      <a href="http://localhost:3000/">
          <img src={logo} alt="Logo" className="header" />
      </a>
);
}

export default Header;
