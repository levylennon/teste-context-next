"use client";

import Link from "next/link";
import { useNamesContext } from "../../../context/namesContext";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState<string>("");
  const { handleAddName } = useNamesContext();

  const handleClick = () => {
    handleAddName(name);
    setName("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-800 gap-4">
      <Link href={"/"}>
        <button className="bg-white p-2 rounded-md">Visualizar Nomes</button>
      </Link>
      <div className="flex flex-col">
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button
          className="bg-gray-400 p-2 rounded-md"
          onClick={() => handleClick()}
        >
          Criar
        </button>
      </div>
    </main>
  );
}
