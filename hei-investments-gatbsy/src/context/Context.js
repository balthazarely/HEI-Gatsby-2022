import React, { createContext, useState } from "react";


const defaultContext = {
  menuOpen: ''
};
export const GlobalContext = createContext(defaultContext);

const GlobalProvider = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

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
