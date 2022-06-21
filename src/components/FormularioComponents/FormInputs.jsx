export const FormInputs = ({
	idForm = "",
	valueForm = "Empty",
	typeForm = "text",
	placeholderForm = "Type Something...",
	valueContent = "",
	setValue,
}) => {
	const placeholderFormEmail = "correo@correo.com";
	return (
		<div>
			{/* ! div > className='flex gap-3' */}
			{/* ! label > className='w-2/5'  */}
			{/* ! input > className='w-2/3'  */}
			<label
				htmlFor={idForm}
				className='block mb-3 text-sm font-bold uppercase text-gray-700'
			>
				{valueForm}
			</label>
			<input
				id={idForm}
				type={typeForm}
				placeholder={
					typeForm.includes("email") ? placeholderFormEmail : placeholderForm
				}
				value={valueContent}
				onChange={(e) => setValue(e.target.value)}
				className='w-full py-3 px-2 text-gray-700 placeholder:text-sm border-2 focus:outline-none focus:ring-0 focus:border-indigo-600 transition placeholder-gray-400 rounded-md appearance-none bg-transparent'
			/>
		</div>
	);
};
