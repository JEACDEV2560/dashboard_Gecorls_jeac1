
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';
import {CircleStar,MapPin  ,GraduationCap, Shield, User,Download, Calendar, HardHat, TriangleAlert} from 'lucide-react'
import { Badge } from './badge';

export default function Page() {
  return (
   
    <><div className="container mx-auto h-24 border-b-2 py-2">
      {/*nombre del representante o usuario*/}
      <div className="flex h-full flex-col justify-center">
        <h1 className="font-bold text-6x1 leading-tight">Josias Aguilar</h1>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">Representante</span>
          <p className="text-sm font-medium text-green-800">IUTEPI</p>
        </div>
      </div>
      <div className="grow">
        <div className="flex items-center justify-center gap-2 md:grap-8">

          
        </div>

      </div>
    {/* Mensaje de aviso */}
    </div><div><p className="flex items-center justify-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-center font-bold text-black"><HardHat size={24} strokeWidth={2.5} nonScalingStroke /> Sitio Web en Construccion <HardHat size={24} strokeWidth={2.5} nonScalingStroke /></p></div><div> </div>
   <br />
   <br />
  <div className="origin-center scale-[1.03] rounded-md bg-white-100 p-4 shadow-md">
    {/* Identificador del estudiante  */}
    <div className="mx-auto flex w-full flex-col gap-4 rounded-md border-b-2 bg-[#0D1226] px-4 py-3 md:flex-row md:items-center md:justify-between">
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 shadow-md shadow-white/50">
          <User className="h-8 w-8 text-white" size={30} strokeWidth={2} />
        </div>
        <div className="min-w-0">
          <div className="mb-1 flex items-center gap-2">
            <Shield className="h-5 w-5 text-green-400" size={20} strokeWidth={2.5} />
            <Badge variant="success">Matriculado</Badge>
          </div>
          <h1 className="font-bold text-4x1 truncate text-white">Fernado Villamediana</h1>
          <p className="text-sm text-white">ID Expediente: 1</p>
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4 md:justify-end">
        {/* Url de descarga de documentos del estudiante */}
        <Link href="#" className="inline-flex items-center gap-2 rounded-sm px-2 py-1 text-white shadow-sm shadow-white/50">
          <Download size={20} strokeWidth={2.5} />
          Constancia
        </Link>
        <Link href="#" className="inline-flex items-center gap-2 rounded-sm px-2 py-1 text-white shadow-sm shadow-white/50">
          <Download size={20} strokeWidth={2.5} />
          Asistencia
        </Link>
        <Link href="#" className="inline-flex items-center gap-2 rounded-sm px-2 py-1 text-white shadow-sm shadow-white/50">
          <Download size={20} strokeWidth={2.5} />
          Notas
        </Link>
      </div>
    </div>
    <br/>
       {/* Tarjetas de informacion del estudiante */}
        <div className="flex w-full gap-2">
      <div className="card flex h-16 grow items-center justify-center gap-3 rounded-md bg-gray-100 shadow-md shadow-black/10">
    <GraduationCap className="shrink-0 text-blue-600" size={24} strokeWidth={2.5} nonScalingStroke />
    <div className="flex flex-col">
      <h1>Grado Academico</h1>
      <p>3er Año</p>
    </div>
  </div>
  <div className="divider divider-horizontal text-gray-400"></div>
  <div className="card flex h-16 grow items-center justify-center gap-3 rounded-md bg-gray-100 shadow-md shadow-black/10">
    <MapPin className="shrink-0 text-purple-600" size={24} strokeWidth={2.5} nonScalingStroke />
    <div className="flex flex-col">
      <h1>Seccion Asignada</h1>
      <p>Seccion A</p>
    </div>
  </div>
  <div className="divider divider-horizontal text-gray-400"></div>
  <div className="card flex h-16 grow items-center justify-center gap-3 rounded-md bg-gray-100 shadow-md shadow-black/10">
    <CircleStar className="shrink-0 text-yellow-500" size={24} strokeWidth={2.5} nonScalingStroke />
    <div className="flex flex-col">
      <h1>Promedio General</h1>
      <p>16.5</p>
    </div>
  </div>
  <div className="divider divider-horizontal text-gray-400"></div>
  <div className="card flex h-16 grow items-center justify-center gap-3 rounded-md bg-gray-100 shadow-md shadow-black/10">
    <Calendar className="shrink-0 text-blue-500" size={24} strokeWidth={2.5} nonScalingStroke />
    <div className="flex flex-col">
      <h1>Edad del Alumno</h1>
      <p>17 años</p>
    </div>
  </div>
    
</div>
      {/* Tarjetas de informacion  datos personales del estudiante */}
       <div className="mt-6 flex w-full flex-col gap-4 lg:flex-row lg:items-stretch">
         <div className="grow rounded-md border-2 border-white p-4 shadow-md">
           <h2 className="mb-3 font-bold">Datos personales del estudiante</h2>
           <hr className="mb-3 border-gray-400" />
           <div className="flex flex-col gap-3">
             <div>
               <p className="font-semibold">Número de cédula:</p>
               <p>V-20.123.456</p>
             </div>
             <div>
               <p className="font-semibold">Fecha de nacimiento:</p>
               <p>10/10/2005</p>
             </div>
             <div>
               <p className="font-semibold">Lugar de nacimiento:</p>
               <p>Valencia Edo. Carabobo</p>
             </div>
             <div>
               <p className="font-semibold">Año escolar actual:</p>
               <p>2026-2027</p>
             </div>
           </div>
         </div>
         <div className="divider lg:divider-horizontal"></div>
         {/* Ficha medica del estudiante  y status */ }
         <div className="min-h-32 grow rounded-md border-2 border-white bg-base-300 p-4 shadow-md">
           <h2 className="mb-3 font-bold">Ficha médica del estudiante</h2>
           <hr className="mb-4 border-gray-400" />
           <div className="grid gap-3 sm:grid-cols-2">
             <div className="rounded-md bg-red-500/10 p-3">
               <h3 className="mb-2  text-center px-3 py-1 font-semibold">Grupo sanguíneo</h3>
               <p className=" text-center  px-3 py-1">B+</p>
             </div>
             <div className="rounded-md bg-green-500/10 p-3 text-center">
               <h3 className="text-green-500">Estatus del estudiante <p className="text-green-500 text-bold">INSCRIPTO</p></h3>
               
             </div>
            
             <div className="flex items-start gap-2 rounded-md border border-amber-500/40 bg-amber-100/60 p-3 sm:col-span-2">
               <TriangleAlert className="mt-1 h-5 w-5 shrink-0 text-amber-700" aria-hidden="true" />
               <div>
                 <h3 className="mb-2 rounded-[25%] px-3 py-1 font-semibold">Observación médica</h3>
                 <p className="rounded-[25%] px-3 py-1">Sin observaciones registradas</p>
               </div>
             </div>
           </div>
         </div>

       </div>
   </div>
   
     </>
  );
}
