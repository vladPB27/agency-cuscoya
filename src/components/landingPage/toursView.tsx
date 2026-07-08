import { packages } from "@/app/data/packages";
import Link from "next/link";

type Props = {
  params?: Promise<{
    id: string;
  }>;
};

export async function ToursView({ params }: Props) {
  const resolvedParams = await params;
  const id = resolvedParams?.id;

  if (!id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center">
        <h1 className="text-2xl font-bold text-gray-800">No se seleccionó un paquete</h1>
        <p className="mt-2 text-gray-500">Por favor, regresa al catálogo para elegir un tour.</p>
      </div>
    );
  }

  const pkg = packages.find((p) => p.id === Number(id));

  if (!pkg) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-6 text-center">
        <h1 className="text-2xl font-bold text-red-500">Tour no encontrado</h1>
        <Link href="/" className="mt-4 text-sm font-semibold text-amber-600 hover:underline">
          ← Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50 min-h-screen">
      {/* Botón de Regreso */}
      <div className="mb-6">
        <Link href="/" className="text-sm font-medium text-amber-600 hover:text-amber-700 transition flex items-center gap-1">
          <span>←</span> Volver a todos los paquetes
        </Link>
      </div>

      {/* Cabecera Principal */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 mb-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <span className="px-3 py-1 bg-amber-50 text-amber-700 text-xs font-semibold rounded-full uppercase tracking-wider">
            {pkg.days}
          </span>
          <div className="text-right">
            <span className="text-xs text-gray-400 block uppercase font-medium">Desde</span>
            <span className="text-3xl font-black text-gray-900">${pkg.price}</span>
            <span className="text-xs text-gray-500 block">por persona</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
          {pkg.title}
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-4xl">
          {pkg.details.overview}
        </p>
      </div>

      {/* Grid Principal: Info Izquierda / Detalles Derecha */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Columna Izquierda: Ficha Técnica */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
              Ficha Técnica
            </h2>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-gray-500 font-medium">Duración:</dt>
                <dd className="text-gray-900 font-semibold">{pkg.details.information.duration}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 font-medium">Horario:</dt>
                <dd className="text-gray-900 font-semibold text-right">{pkg.details.information.schedule}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 font-medium">Dificultad:</dt>
                <dd className="text-gray-900 font-semibold">{pkg.details.information.difficulty}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 font-medium">Altitud Máx:</dt>
                <dd className="text-gray-900 font-semibold">{pkg.details.information.altitude}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 font-medium">Tipo de Grupo:</dt>
                <dd className="text-gray-900 font-semibold">{pkg.details.information.group}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-gray-500 font-medium">Idiomas:</dt>
                <dd className="text-gray-900 font-semibold">{pkg.details.information.language}</dd>
              </div>
            </dl>
          </div>

          {/* Caja de Recomendaciones */}
          <div className="bg-amber-50/60 rounded-2xl border border-amber-100 p-6">
            <h3 className="text-base font-bold text-amber-900 mb-3 flex items-center gap-2">
              💡 Recomendaciones
            </h3>
            <ul className="space-y-2 text-sm text-amber-900/80 list-disc list-inside">
              {pkg.details.recommendations.map((rec, idx) => (
                <li key={idx}>{rec}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Columna Derecha: Itinerario e Inclusiones */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Bloque Qué Incluye / No Incluye */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div>
              <h3 className="text-base font-bold text-emerald-700 mb-4 flex items-center gap-2">
                ✓ Qué Incluye
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {pkg.details.includes.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 font-bold">✓</span>
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-6">
              <h3 className="text-base font-bold text-red-700 mb-4 flex items-center gap-2">
                ✕ No Incluye
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {pkg.details.notIncludes.map((ninc, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-400 font-bold">✕</span>
                    {ninc}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sección de Itinerario Estilo Línea de Tiempo */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Itinerario del Viaje</h2>
            
            <div className="relative border-l border-gray-200 ml-4 pl-6 space-y-8">
              {pkg.details.itinerary.map((step, idx) => (
                <div key={idx} className="relative">
                  {/* Punto de la línea de tiempo */}
                  <span className="absolute -left-[31px] top-1.5 bg-amber-500 border-4 border-white w-4 h-4 rounded-full shadow-sm"></span>
                  
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                    <span className="text-sm font-bold text-amber-600 tracking-wider bg-amber-50 px-2 py-0.5 rounded">
                      {step.time}
                    </span>
                    <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}