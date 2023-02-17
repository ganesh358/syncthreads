import React, { useContext, useState } from "react";

export const AuthContext = React.createContext();

function AppContextProviderComponent({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const [name, setName] = useState("");
  const [token, setToken] = useState(null);
  const toggle = () => {
    setIsAuth(!isAuth);
  };
  const loginUser = (name,token) => {
    setName(name)
    setToken(token)
    setIsAuth(true);
  };
  const logoutUser = () => {
    setName("")
    setToken(null);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, toggle, loginUser, logoutUser,name,token}}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AppContextProviderComponent;
