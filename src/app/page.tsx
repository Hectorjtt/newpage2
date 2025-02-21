"use client";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-4">
      {/* Número centrado */}
      <h1 className="text-4xl font-bold text-gray-800">{counter}</h1>

      {/* Contenedor de botones con tamaño más pequeño */}
      <div className="flex gap-4">
        {/* Botón para incrementar */}
        <button
          onClick={() => setCounter(counter + 1)}
          className="bg-green-500 text-white rounded-md px-4 py-2 hover:bg-green-600 transition"
        >
          Incrementar
        </button>

        {/* Botón para decrementar */}
        <button
          onClick={() => setCounter(counter - 1)}
          className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600 transition"
        >
          Decrementar
        </button>
      </div>
    </main>
  );
}