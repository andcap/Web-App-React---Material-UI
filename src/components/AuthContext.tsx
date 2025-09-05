import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [email, setEmailState] = useState('');
  const [password, setPassword] = useState('');

  // All'avvio, recupera email da localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    if (savedEmail) setEmailState(savedEmail);
  }, []);

  // Salva email in localStorage quando cambia
  useEffect(() => {
    if (email) {
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('email');
    }
  }, [email]);

  // Wrapper per aggiornare email
  const setEmail = (value: string) => {
    setEmailState(value);
  };
  return (
    <AuthContext.Provider value={{ email, setEmail, password, setPassword }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
