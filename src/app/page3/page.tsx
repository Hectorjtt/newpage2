"use client";
import { useState } from "react";
import Navbar from "../components/Navbar"; // 👈 Verifica si la ruta es correcta

export default function RegisterPage() {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loggedUser, setLoggedUser] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!user.nombre || !user.email || !user.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      setError("El correo no tiene un formato válido.");
      return;
    }

    if (!/^(?=.*[A-Z])(?=.*\W).{8,}$/.test(user.password)) {
      setError("La contraseña debe tener al menos 8 caracteres, una mayúscula y un carácter especial.");
      return;
    }

    setError("");
    setLoggedUser(user.nombre);
  };

  return (
    <>
      <Navbar /> {/* 👈 Ahora sí debería mostrarse correctamente */}

      <div className="relative flex flex-col items-center justify-center min-h-screen pt-24">
        {/* Nombre del usuario en la esquina superior derecha */}
        {loggedUser && (
          <div className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-md">
            {loggedUser}
          </div>
        )}

        <h1 className="text-3xl font-bold text-center">Registro de Usuario</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto mt-6">
          <input
            type="text"
            placeholder="Nombre"
            value={user.nombre}
            onChange={(e) => setUser({ ...user, nombre: e.target.value })}
            className="border p-2 rounded-md text-black"
          />
          <input
            type="email"
            placeholder="Correo"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border p-2 rounded-md text-black"
          />
          <input
            type="password"
            placeholder="Contraseña"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border p-2 rounded-md text-black"
          />

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition">
            Registrarse
          </button>
        </form>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
      </div>
    </>
  );
}