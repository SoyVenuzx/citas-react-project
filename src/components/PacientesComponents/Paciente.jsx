import { PacientesInfo } from './PacientesInfo';

export const Paciente = ({ infoPaciente }) => {
	return (
		<div className='w-full px-5 py-8 mb-5 text-sm bg-white rounded-md shadow-md'>
			<PacientesInfo valueLabel='Nombre' valueInfo={infoPaciente.nombre} />
			<PacientesInfo
				valueLabel='Propietario'
				valueInfo={infoPaciente.propietario}
			/>
			<PacientesInfo valueLabel='Email' valueInfo={infoPaciente.email} />
			<PacientesInfo valueLabel='Fecha Alta' valueInfo={infoPaciente.fecha} />
			<PacientesInfo valueLabel='Síntomas' valueInfo={infoPaciente.sintomas} />
		</div>
	);
};
