import { useState } from "react";
import { FormInputs } from "./FormInputs";
import { FormularioAlert } from "./formularioAlert";

export const FormularioItems = ({ pacientes, setPacientes }) => {
	// ! Hooks
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");

	const [error, setError] = useState(false);
	const [send, setSend] = useState(false);

	const generarId = () => {
		const random = Math.random().toString(36).substr(2);
		const date = Date.now().toString(36);

		return date + random;
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validación del formulario
		if ([nombre, propietario, email, fecha, sintomas].includes("")) {
			setError(!error);

			setTimeout(() => {
				setError(false);
			}, 2500);
		} else if (!error && !send) {
			setSend(true);

			setTimeout(() => {
				setSend(false);
			}, 2500);
		}

		const objetoPaciente = {
			nombre,
			propietario,
			email,
			fecha,
			sintomas,
			id: generarId(),
		};

		// ! Guardando los valores de los pacientes
		if (!send) setPacientes([...pacientes, objetoPaciente]);

		// ! Reiniciando los valores de los inputs
		setNombre("");
		setPropietario("");
		setEmail("");
		setFecha("");
		setSintomas("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-6 px-5 py-8 mt-10 bg-white rounded-md shadow-md'
			action=''
		>
			{true && <FormularioAlert error={error} send={send} />}

			<FormInputs
				idForm='mascota'
				valueForm='Nombre Mascota'
				placeholderForm='Nombre de la Mascota'
				typeForm='text'
				//!: Hook
				valueContent={nombre}
				setValue={setNombre}
			/>

			<FormInputs
				idForm='propietario'
				valueForm='Nombre Propietario'
				placeholderForm='Nombre del propietario'
				typeForm='text'
				//!: Hook
				valueContent={propietario}
				setValue={setPropietario}
			/>

			<FormInputs
				idForm='email'
				valueForm='Correo Electrónico'
				typeForm='email'
				// ! Hook
				valueContent={email}
				setValue={setEmail}
			/>

			<FormInputs
				idForm='alta'
				valueForm='Alta'
				typeForm='date'
				// ! Hook
				valueContent={fecha}
				setValue={setFecha}
			/>

			<div>
				<label
					id='sintomas'
					className='block mb-3 text-sm font-bold text-gray-700 uppercase'
				>
					Síntomas
				</label>
				<textarea
					id={"sintomas"}
					placeholder={"Describe los Síntomas"}
					className='w-full px-2 py-3 text-gray-700 placeholder-gray-400 transition bg-transparent border-2 rounded-md appearance-none resize-none placeholder:text-sm focus:outline-none focus:ring-0 focus:border-indigo-600'
					// ! Hook
					value={sintomas}
					onChange={(e) => setSintomas(e.target.value)}
				/>
			</div>

			<input
				type='submit'
				className='w-full py-3 text-sm font-bold text-white uppercase transition-colors bg-indigo-600 rounded-sm cursor-pointer hover:bg-indigo-800'
				value={"Agregar paciente"}
			/>
		</form>
	);
};
