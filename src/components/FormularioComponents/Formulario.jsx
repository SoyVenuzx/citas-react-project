import { FormularioItems } from "./FormularioItems";
import { useState, useEffect } from "react";

export const Formulario = () => {
	return (
		<div className='md:w-1/2 lg:w-2/5 mb-10'>
			<h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>

			<p className='text-sm mt-4 text-center'>
				Añade Pacientes y {""}
				<span className='text-indigo-600 cursor-pointer hover:underline font-bold'>
					Administralos
				</span>
			</p>

			<FormularioItems />
		</div>
	);
};
