import { PacientesInfo } from './PacientesInfo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Paciente = ({ infoPaciente, setPaciente, eliminarPaciente }) => {
	const { nombre, propietario, email, fecha, sintomas, id } = infoPaciente;

	const handleEliminar = () => {
		toast.error('🦄 ¡Estás eliminando un paciente!', {
			position: 'top-right',
			autoClose: false,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	return (
		<div className='w-full px-5 py-8 mb-8 text-sm bg-white rounded-md shadow-md'>
			{/* <PacientesInfo valueLabel='ID' valueInfo={infoPaciente.id} /> */}
			<PacientesInfo valueLabel='Nombre' valueInfo={nombre} />
			<PacientesInfo valueLabel='Propietario' valueInfo={propietario} />
			<PacientesInfo valueLabel='Email' valueInfo={email} />
			<PacientesInfo valueLabel='Fecha Alta' valueInfo={fecha} />
			<PacientesInfo valueLabel='Síntomas' valueInfo={sintomas} />

			<div className='flex justify-between w-full gap-6 mt-6'>
				<button
					type='button'
					className='block px-5 py-2 text-sm font-bold text-white uppercase transition-all bg-indigo-700 rounded-md hover:bg-indigo-800'
					onClick={() => setPaciente(infoPaciente)}
				>
					Editar
				</button>

				<button
					type='button'
					className='px-5 py-2 text-sm font-bold text-white uppercase transition-all bg-red-700 rounded-md blcok hover:bg-red-800'
					onClick={handleEliminar}
				>
					Eliminar
				</button>
			</div>
			<ToastContainer
				onClick={() => {
					setTimeout(() => {
						eliminarPaciente(id);
					}, 1000);
				}}
			/>
		</div>
	);
};
