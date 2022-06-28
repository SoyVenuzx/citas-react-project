import { PacientesInfo } from "./PacientesInfo";

export const Paciente = ({ infoPaciente, setPaciente }) => {
	return (
		<div className='w-full px-5 py-8 mb-8 text-sm bg-white rounded-md shadow-md'>
			<PacientesInfo valueLabel='ID' valueInfo={infoPaciente.id} />
			<PacientesInfo valueLabel='Nombre' valueInfo={infoPaciente.nombre} />
			<PacientesInfo
				valueLabel='Propietario'
				valueInfo={infoPaciente.propietario}
			/>
			<PacientesInfo valueLabel='Email' valueInfo={infoPaciente.email} />
			<PacientesInfo valueLabel='Fecha Alta' valueInfo={infoPaciente.fecha} />
			<PacientesInfo valueLabel='Síntomas' valueInfo={infoPaciente.sintomas} />

			<div className='flex justify-between w-full gap-6 mt-6'>
				<button
					type='button'
					className='block px-5 py-2 text-sm font-bold text-white uppercase transition-all bg-indigo-700 rounded-sm hover:bg-indigo-800'
				>
					Editar
				</button>

				<button
					type='button'
					className='px-5 py-2 text-sm font-bold text-white uppercase transition-all bg-red-700 rounded-sm blcok hover:bg-red-800'
				>
					Editar
				</button>
			</div>
		</div>
	);
};
