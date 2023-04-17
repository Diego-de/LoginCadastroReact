import { createContext, useState , useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

function AuthProvider({ children }) {

  const [token, setToken] = useState();

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };


  return (
    <AuthContext.Provider value={{ token, setToken, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };