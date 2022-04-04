import React, { useState, useContext } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { GlobalContext } from "../../context/Context";

export const HamburgerIcon = () => {
  const [isOpen, setOpen] = useState(false);
  const { toggleMenu, menuOpen } = useContext(GlobalContext);

  return (
    <div onClick={() => toggleMenu()}>
      <Hamburger
        duration={0.5}
        color="#131313"
        size={24}
        toggled={isOpen}
        toggle={setOpen}
      />
    </div>
  );
};
