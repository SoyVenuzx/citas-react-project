import { Paciente } from './Paciente';

export const ListadoPacientes = ({
	pacientes,
	setPaciente,
	eliminarPaciente,
}) => {
	return (
		<div className='md:w-1/2 lg:w-3/5'>
			<h2 className='text-3xl font-black text-center'>
				{' '}
				{pacientes.length ? 'Listado Pacientes' : 'Ingresa pacientes'}{' '}
			</h2>

			<p className='mt-4 mb-10 text-center text-md'>
				{pacientes.length ? 'Administra tus' : 'Comienza agregando pacientes'}{' '}
				{''}
				<span className='font-bold text-indigo-600 cursor-pointer hover:underline'>
					{pacientes.length ? 'Pacientes y Citas' : 'y se mostrarán acá'}
				</span>
			</p>

			<div className='md:h-screen md:overflow-y-auto pr-5'>
				{pacientes.map((paciente) => (
					<Paciente
						key={paciente.id}
						infoPaciente={paciente}
						setPaciente={setPaciente}
						eliminarPaciente={eliminarPaciente}
					/>
				))}
			</div>
		</div>
	);
};
