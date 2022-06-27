export const FormularioAlert = ({ error, send }) => {
	return (
		<div
			className={
				error
					? 'block w-full p-3 rounded-lg bg-red-800 transition-all text-white'
					: send &&
					  'w-full p-3 rounded-lg bg-green-600 transition-all text-white'
			}
		>
			<p className='font-black text-center uppercase text-md'>
				{error
					? 'Todos los campos son obligatorios'
					: send && 'Datos enviados correctamente'}
			</p>
		</div>
	);
};
