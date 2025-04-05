import type { Metadata } from "next";
import { Providers } from "./providers";
import { Toaster } from "sonner";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "LicitaLAB - Gestión de Oportunidades",
  description: "Plataforma para la gestión de oportunidades de negocio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="bg-gray-50 min-h-screen">
        <Providers>
          <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center">
                    <h1 className="text-xl font-bold text-gray-800">
                      LicitaLAB
                    </h1>
                  </div>
                  <nav className="ml-6 flex space-x-4">
                    <Link
                      href="/"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Inicio
                    </Link>
                    <Link
                      href="/opportunities"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      Oportunidades
                    </Link>
                    <Link
                      href="/followed"
                      className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    >
                      En Seguimiento
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </header>

          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {children}
          </main>

          <footer className="bg-white border-t mt-auto py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <p className="text-center text-sm text-gray-500">
                © {new Date().getFullYear()} LicitaLAB. Todos los derechos
                reservados.
              </p>
            </div>
          </footer>

          <Toaster position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
