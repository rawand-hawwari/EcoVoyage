import React, { createContext, useContext, useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [cookies, setCookie, removeCookie] = useCookies(['authToken']);
  const [user, setUser] = useState(null);

  // Check if the user is authenticated based on the presence of a token in cookies
  useEffect(() => {
    const token = cookies.authToken;
    if (token) {
      // Fetch user data from your API using the token, e.g., an API call with the token
      // Set user data if authenticated, or handle token expiration
      // setUser(userData);
    }
  }, [cookies.authToken]);

  const login = (token) => {
    // Save the authentication token to cookies
    setCookie('authToken', token);
    // Fetch user data from your API using the token and set user state
  };

  const logout = () => {
    // Remove the authentication token from cookies
    removeCookie('authToken');
    // Clear user data or set it to null
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
