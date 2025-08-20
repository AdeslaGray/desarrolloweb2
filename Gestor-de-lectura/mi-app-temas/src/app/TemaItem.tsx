import React, { createContext, useContext, useState } from 'react';

export type Tema = {
  id: number;
  titulo: string;
  interesante: boolean;
};

type TemasContextType = {
  temas: Tema[];
  toggleInteresante: (id: number) => void;
};

const TemasContext = createContext<TemasContextType | undefined>(undefined);

const temasIniciales: Tema[] = [
  { id: 1, titulo: 'React', interesante: false },
  { id: 2, titulo: 'TypeScript', interesante: true },
  // Agrega más temas según tu necesidad
];

export const TemasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [temas, setTemas] = useState<Tema[]>(temasIniciales);

  const toggleInteresante = (id: number) => {
    setTemas(prev =>
      prev.map(t =>
        t.id === id ? { ...t, interesante: !t.interesante } : t
      )
    );
  };

  return (
    <TemasContext.Provider value={{ temas, toggleInteresante }}>
      {children}
    </TemasContext.Provider>
  );
};

export const useTemas = () => {
  const context = useContext(TemasContext);
  if (!context) throw new Error('useTemas debe usarse dentro de TemasProvider');
  return context;
};