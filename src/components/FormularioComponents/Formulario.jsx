import { FormularioItems } from './FormularioItems';
import { useState, useEffect } from 'react';

export const Formulario = ({ pacientes, setPacientes }) => {
	return (
		<div className='mb-10 md:w-1/2 lg:w-2/5'>
			<h2 className='text-2xl font-black text-center'>Seguimiento Pacientes</h2>

			<p className='mt-4 text-sm text-center'>
				Añade Pacientes y {''}
				<span className='font-bold text-indigo-600 cursor-pointer hover:underline'>
					Administralos
				</span>
			</p>

			<FormularioItems pacientes={pacientes} setPacientes={setPacientes} />
		</div>
	);
};
