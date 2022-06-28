import { useState } from "react";
import { Formulario } from "./components/FormularioComponents/Formulario.jsx";
import { Header } from "./components/Header.jsx";
import { ListadoPacientes } from "./components/PacientesComponents/ListadoPacientes";

export const App = () => {
	const [pacientes, setPacientes] = useState([]);
	const [paciente, setPaciente] = useState({});

	return (
		<div className='container mx-auto mt-10'>
			<Header />
			<div className='gap-5 px-5 mt-14 md:flex'>
				<Formulario pacientes={pacientes} setPacientes={setPacientes} />
				<ListadoPacientes pacientes={pacientes} setPaciente={setPaciente} />
			</div>
		</div>
	);
};
