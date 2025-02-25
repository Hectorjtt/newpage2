"use client";
import { useState } from "react";
import Navbar from "./components/Navbar"; // 👈 Importamos el Navbar

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Navbar /> {/* 👈 Mostramos el Navbar */}
      <main className="flex flex-col min-h-screen items-center justify-center gap-4 pt-16">
        {/* Número centrado */}
        <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>

        {/* Contenedor de botones */}
        <div className="flex gap-4">
          <button
            onClick={() => setCounter(counter + 1)}
            className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition"
          >
            Incrementar
          </button>
          <button
            onClick={() => setCounter(counter - 1)}
            className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition"
          >
            Decrementar
          </button>
        </div>
      </main>
    </>
  );
}