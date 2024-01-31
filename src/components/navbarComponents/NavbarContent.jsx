import React from "react";
import { ButtonGroup } from "@mui/material-next/ButtonGroup";

const NavbarContent = () => {
  const links = ["Home", "About", "Services", "Contact"];

  return (
    <>
      {/* <ul className="flex flex-col p-3 space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4"> */}
      {links.map((link, index) => (
        <li key={index}>
          <ButtonGroup
            href={`#${link.toLowerCase()}`}
            // className="text-white font-semibold text-lg hover:text-metaverse-pink"
            color="tertiary"
            disabled={false}
            size="large"
            variant="elevated"
          >
            {link}
          </ButtonGroup>
        </li>
      ))}
      {/* </ul> */}
    </>
  );
};

export default NavbarContent;
