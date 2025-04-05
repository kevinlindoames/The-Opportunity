import Link from "next/link";

export default function Home() {
  return (
    <div className="py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Bienvenido a LicitaLAB
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
          Plataforma para la gestión de oportunidades de negocio
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/opportunities"
            className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            Ver Oportunidades
          </Link>
          <Link
            href="/followed"
            className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            Oportunidades en Seguimiento
          </Link>
        </div>
      </div>
    </div>
  );
}
