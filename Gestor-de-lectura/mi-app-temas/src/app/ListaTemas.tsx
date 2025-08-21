import React, { createContext, useContext } from 'react';

type Tema = {
  id: number;
  interesante: boolean;
  // Agrega otras propiedades según tu modelo
};

const temasEjemplo: Tema[] = [
  { id: 1, interesante: true },
  { id: 2, interesante: false },
  // Más temas...
];

const TemasContext = createContext<{ temas: Tema[] }>({ temas: temasEjemplo });

export const useTemas = () => useContext(TemasContext);

export const TemasProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <TemasContext.Provider value={{ temas: temasEjemplo }}>
    {children}
  </TemasContext.Provider>
);