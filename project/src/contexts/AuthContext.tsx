import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface AuthState {
  isAuthenticated: boolean;
  user: { username: string } | null;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: { username: string } | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Simple demo credentials - in production, this would be handled by a backend
const ADMIN_CREDENTIALS = {
  username: 'adminanamol',
  password: 'growthspire2024'
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null
  });

  // Check for existing session on mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('growthspire_auth');
    if (savedAuth) {
      try {
        const parsedAuth = JSON.parse(savedAuth);
        if (parsedAuth.isAuthenticated && parsedAuth.user) {
          setAuthState(parsedAuth);
        }
      } catch (error) {
        localStorage.removeItem('growthspire_auth');
      }
    }
  }, []);

  const login = async (username: string, password: string): Promise<boolean> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      const newAuthState = {
        isAuthenticated: true,
        user: { username }
      };
      
      setAuthState(newAuthState);
      localStorage.setItem('growthspire_auth', JSON.stringify(newAuthState));
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: null
    });
    localStorage.removeItem('growthspire_auth');
  };

  return (
    <AuthContext.Provider value={{
      isAuthenticated: authState.isAuthenticated,
      user: authState.user,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}