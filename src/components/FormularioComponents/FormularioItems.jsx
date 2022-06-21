import { useState } from "react";
import { FormInputs } from "./FormInputs";

export const FormularioItems = () => {
	// ! Hooks
	const [nombre, setNombre] = useState("");
	const [propietario, setPropietario] = useState("");
	const [email, setEmail] = useState("");
	const [fecha, setFecha] = useState("");
	const [sintomas, setSintomas] = useState("");

	const [error, setError] = useState(false);
	const [send, setSend] = useState(false);

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
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col gap-6 bg-white shadow-md rounded-md py-8 px-5 mt-10'
			action=''
		>
			{true && (
				<div
					className={
						error
							? "block w-full p-3 rounded-lg bg-red-800 transition-all text-white"
							: send &&
							  "w-full p-3 rounded-lg bg-green-600 transition-all text-white"
					}
				>
					<p className='text-md font-black text-center uppercase'>
						{error
							? "Todos los campos son obligatorios"
							: send && "Datos enviados correctamente"}
					</p>
				</div>
			)}

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
					className='block mb-3 text-sm font-bold uppercase text-gray-700'
				>
					Síntomas
				</label>
				<textarea
					id={"sintomas"}
					placeholder={"Describe los Síntomas"}
					className='resize-none w-full py-3 px-2 text-gray-700 placeholder:text-sm border-2 focus:outline-none focus:ring-0 focus:border-indigo-600 transition placeholder-gray-400 rounded-md appearance-none bg-transparent'
					// ! Hook
					value={sintomas}
					onChange={(e) => setSintomas(e.target.value)}
				/>
			</div>

			<input
				type='submit'
				className='bg-indigo-600 w-full text-white uppercase font-bold text-sm py-3 cursor-pointer rounded-sm hover:bg-indigo-800 transition-colors'
				value={"Agregar paciente"}
			/>
		</form>
	);
};
