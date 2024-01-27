// src/components/NavbarContent.js
import React from "react";

const NavbarContent = () => {
  const links = ["Home", "About", "Services", "Contact"];

  return (
    <ul className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={`#${link.toLowerCase()}`}
            className="text-white font-semibold text-lg hover:text-metaverse-pink"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavbarContent;
