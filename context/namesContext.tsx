"use client";

import { createContext, useContext, useState } from "react";

interface IProvider {
  children: React.ReactNode;
}

interface IContext {
  names: string[];
  handleAddName(names: string): void;
}

export const NamesContext = createContext<IContext>(null!);

export function WrapperNames({ children }: IProvider) {
  const [names, setNames] = useState<string[]>([
    "Primeiro Nome",
    "Segundo Nome",
  ]);

  const handleAddName = (name: string) => {
    setNames((prev) => [...prev, name]);
    console.log("Nome Adicionado", name);
    console.log(names);
  };

  return (
    <NamesContext.Provider value={{ names, handleAddName }}>
      {children}
    </NamesContext.Provider>
  );
}

export function useNamesContext() {
  return useContext(NamesContext);
}
