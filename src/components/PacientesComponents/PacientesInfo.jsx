export const PacientesInfo = ({ valueLabel = "", valueInfo = "" }) => {
	valueInfo = valueInfo.includes("lorem")
		? "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id voluptas sunt at delectus natus, alias pariatur illum non eos voluptatibus optio aliquam ipsum aspernatur est illo porro modi molestiae impedit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id voluptas sunt at delectus natus, alias pariatur illum non eos voluptatibus optio aliquam ipsum aspernatur est illo porro modi molestiae impedit."
		: valueInfo;
	return (
		<p className='font-bold mb-3 text-gray-700 uppercase'>
			{`${valueLabel}:`} {""}
			<span className='font-normal normal-case'> {valueInfo} </span>
		</p>
	);
};
