import { Paciente } from "./Paciente";
import { PacientesInfo } from "./PacientesInfo";

export const ListadoPacientes = () => {
	return (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
			<h2 className='font-black text-2xl text-center'>Listado Pacientes</h2>

			<p className='text-sm mt-4 mb-10 text-center'>
				Administra tus {""}
				<span className='text-indigo-600 cursor-pointer hover:underline font-bold'>
					Pacientes y Citas
				</span>
			</p>

			<Paciente />
			<Paciente />
			<Paciente />
			<Paciente />
			<Paciente />
		</div>
	);
};
