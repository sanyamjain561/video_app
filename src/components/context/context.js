import React, { createContext, useState, useContext } from "react";

const Alert = createContext();

const AlertContext = ({ children }) => {
  const [wishState, wishDispatch] = useState({
    show: false,
    message: "",
    error: "",
  });

  return (
    <Alert.Provider value={{ wishState, wishDispatch }}>
      {children}
    </Alert.Provider>
  );
};

export default AlertContext;

export const AlertState = () => {
  return useContext(Alert);
};
