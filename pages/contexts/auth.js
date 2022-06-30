import React, { createContext, useState } from 'react';
import * as auth from "../services/auth";



const AuthContext = createContext()

// const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  
  const [user, setUser] = useState({});
    console.log(user);
  
  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }
  
  async function signOut() {
    setUser(null);
  }
  
  return (
    <AuthContext.Provider
    value={{ signed: !!user, user: {name}, signIn, signOut }}>
      {children}
    </AuthContext.Provider>

);
};

// export function useAuth() {
//   const context = useContext(AuthContext);

//   return context;
// }

export default AuthContext;  