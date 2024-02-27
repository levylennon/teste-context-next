"use client";

import Link from "next/link";
import { useNamesContext } from "../../context/namesContext";

export default function Home() {
  const { names } = useNamesContext();
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gray-800 gap-3">
      <Link href={"/addName"}>
        <button className="bg-white p-2 rounded-md">Cadastrar Nome</button>
      </Link>
      <ul className="text-gray-300 border border-gray-100 p-2 rounded-md divide-y-2">
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
