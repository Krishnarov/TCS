import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);

  const login = async (email, password) => {
    // Temporary login - backend me change karenge
    if (email === 'admin@tcs.com' && password === 'admin123') {
      setIsAuthenticated(true);
      setAdminUser({ email, name: 'Admin' });
      localStorage.setItem('adminToken', 'dummy-token');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    localStorage.removeItem('adminToken');
  };

  const value = {
    isAuthenticated,
    adminUser,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};