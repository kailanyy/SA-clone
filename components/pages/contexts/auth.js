import React, { createContext, useState, useEffect, useContext } from 'react';
import * as auth from "../services/auth";
import api from '../../../api/index'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);

  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
    
  );
};


export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
