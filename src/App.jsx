import { useState } from "react";
import { Formulario } from "./components/FormularioComponents/Formulario.jsx";
import { Header } from "./components/Header.jsx";
import { ListadoPacientes } from "./components/PacientesComponents/ListadoPacientes";

export const App = () => {
	const [pacientes, setPacientes] = useState([]);

	return (
		<div className='container mt-10 mx-auto'>
			<Header />
			<div className='mt-10 px-5 md:flex gap-5'>
				<Formulario />
				<ListadoPacientes />
			</div>
		</div>
	);
};
