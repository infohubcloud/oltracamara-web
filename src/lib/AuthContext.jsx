import React, { createContext, useContext } from "react";

/**
 * AuthContext "stub" para despliegue en Vercel (sin Base44).
 * Mantiene la API que espera el resto de la app, pero sin autenticación.
 */

const AuthContext = createContext({
  isLoadingAuth: false,
  isLoadingPublicSettings: false,
  authError: null,
  navigateToLogin: () => {},
});

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{
        isLoadingAuth: false,
        isLoadingPublicSettings: false,
        authError: null,
        navigateToLogin: () => {},
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
