import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };

  return (
    <GlobalContext.Provider
      value={{
        menuOpen,
        toggleMenu,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
