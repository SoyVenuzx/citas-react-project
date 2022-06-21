import { PacientesInfo } from "./PacientesInfo";

export const Paciente = () => {
	return (
		<div className='mb-5 w-full text-sm bg-white py-8 px-5 shadow-md rounded-md'>
			<PacientesInfo valueLabel='Nombre' valueInfo={"Hook"} />
			<PacientesInfo valueLabel='Propietario' valueInfo={"Ervin"} />
			<PacientesInfo valueLabel='Email' valueInfo={"correo@correo.com"} />
			<PacientesInfo valueLabel='Fecha Alta' valueInfo={"19/11/2022"} />
			<PacientesInfo valueLabel='Síntomas' valueInfo={"lorem"} />
		</div>
	);
};
