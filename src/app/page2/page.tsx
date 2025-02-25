"use client";
import { useState } from "react";
import Navbar from "../components/Navbar"; // 👈 Importamos el Navbar

export default function ButtonsPage() {
  const [color, setColor] = useState("bg-gray-400");

  return (
    <>
      <Navbar /> {/* 👈 Mostramos el Navbar */}
      <div className="flex flex-col justify-center items-center h-screen gap-6 pt-16">
        {/* Rectángulo centrado con color dinámico */}
        <div className={`w-64 h-32 rounded-lg ${color}`}></div>

        {/* Contenedor de botones */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={() => setColor("bg-red-500")} className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">Rojo</button>
          <button onClick={() => setColor("bg-green-500")} className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">Verde</button>
          <button onClick={() => setColor("bg-blue-500")} className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Azul</button>
          <button onClick={() => setColor("bg-purple-500")} className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition">Morado</button>
        </div>
      </div>
    </>
  );
}