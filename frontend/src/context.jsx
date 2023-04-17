import { createContext } from "react";
import { useState } from "react";
export const MainContext = createContext();
export const Context = ({ children }) => {
  const [fdata, setFdata] = useState(null);

  return (
    <MainContext.Provider value={{ fdata, setFdata }}>
      {children}
    </MainContext.Provider>
  );
};
