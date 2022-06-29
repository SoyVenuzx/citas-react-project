import { useState, useEffect } from 'react';
import { Formulario } from './components/FormularioComponents/Formulario.jsx';
import { Header } from './components/Header.jsx';
import { ListadoPacientes } from './components/PacientesComponents/ListadoPacientes';

export const App = () => {
	const INITIAL = JSON.parse(localStorage.getItem('pacientes')) ?? [];
	const [pacientes, setPacientes] = useState(INITIAL);
	const [paciente, setPaciente] = useState({});

	// TODO: Local Storage
	useEffect(() => {
		localStorage.setItem('pacientes', JSON.stringify(pacientes));
	}, [pacientes]);

	const eliminarPaciente = (id) => {
		const pacientesActualizados = pacientes.filter((item) => item.id !== id);
		setPacientes(pacientesActualizados);
	};

	return (
		<div className='container mx-auto mt-10'>
			<Header />
			<div className='gap-5 px-5 mt-14 md:flex'>
				<Formulario
					pacientes={pacientes}
					setPacientes={setPacientes}
					paciente={paciente}
					setPaciente={setPaciente}
				/>
				<ListadoPacientes
					pacientes={pacientes}
					setPaciente={setPaciente}
					eliminarPaciente={eliminarPaciente}
				/>
			</div>
		</div>
	);
};
