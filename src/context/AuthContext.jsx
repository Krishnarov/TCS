import React, { createContext, useState, useContext, useEffect } from "react";
import axiosInstance from "../../axiosInstance";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on app start
  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      
      if (token) {
        // Verify token with backend
        const res = await axiosInstance.get("/auth/verify", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
        if (res.data.success) {
          setIsAuthenticated(true);
          setAdminUser(res.data.data.user);
        } else {
          // Invalid token
          localStorage.removeItem("adminToken");
          setIsAuthenticated(false);
          setAdminUser(null);
        }
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      localStorage.removeItem("adminToken");
      setIsAuthenticated(false);
      setAdminUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
    try {
      const res = await axiosInstance.post(`/auth/login`, {
        email: email,
        password: password,
      });
      
      if (res.data.success) {
        setIsAuthenticated(true);
        setAdminUser(res.data.data.user);
        localStorage.setItem("adminToken", res.data.data.token);
        return true;
      }
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    setAdminUser(null);
    localStorage.removeItem("adminToken");
  };

  const value = {
    isAuthenticated,
    adminUser,
    login,
    logout,
    loading
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};