import { Paciente } from './Paciente';

export const ListadoPacientes = ({ pacientes, setPacientes }) => {
	return (
		<div className='md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
			<h2 className='text-2xl font-black text-center'>Listado Pacientes</h2>

			<p className='mt-4 mb-10 text-sm text-center'>
				Administra tus {''}
				<span className='font-bold text-indigo-600 cursor-pointer hover:underline'>
					Pacientes y Citas
				</span>
			</p>

			{pacientes.map((paciente) => (
				<Paciente key={paciente.email} infoPaciente={paciente} />
			))}
		</div>
	);
};
