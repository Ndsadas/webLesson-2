const result = document.getElementById('datecalc__result');
const calcError = document.getElementById('calc');

export const printError = (textError) => {
	result.innerText = textError
}

export const printResult = ({years, months, days}) => {
	result.innerHTML = `Осталось - Years: ${years}, Months: ${months}, Days: ${days}`
}

export const printCalcError = (text) => {
	calcError.innerHTML = text
}