import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from "../services/auth";

const AuthContext = createContext({ signed: true });
export default AuthContext;


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  async function signOut() {
    setUser(null);
  }

  return (
    <AuthContext.Provider
    value={{signed: !!user, user, signIn, signOut}}>
    {children}
  </AuthContext.Provider>
    
  );
};


export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}