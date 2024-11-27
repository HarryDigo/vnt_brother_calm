import React, { createContext, useContext, useEffect, useState } from "react";

// Defina seu tipo de usuário conforme necessário
interface User {
  id: string;
  nome: string;
  email: string;
  imagem?: string;
  nick?: string;
}

// Defina a interface do AuthContext para incluir setUser e user
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
}

// Crie o contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    // Recupera o usuário do localStorage ao iniciar o contexto
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    // Atualiza o localStorage sempre que o user muda
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usar o contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
