"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 fixed top-0 w-full flex justify-center gap-6 shadow-md z-50">
      {/* Enlace al Contador */}
      <Link href="/" className="hover:text-gray-400">
        Pagina 1
      </Link>

      {/* Enlace a Page2 (Botones) */}
      <Link href="/page2" className="hover:text-gray-400">
        Pagina 2
      </Link>

      <Link href="/page3" className="hover:text-gray-400">
        Pagina 3
      </Link>

    </nav>
  );
}