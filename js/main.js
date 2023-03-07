import { printError, printResult } from './util.js';
import { getDateDiff } from './datacalc.js';

const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
	event.preventDefault();

	const formDate = new FormData(event.target);

	const firstDate = formDate.get('firstDate');
	const secondDate = formDate.get('secondDate');
 
	if (!firstDate || !secondDate) {
		printError('Нужно указать даты!')
	} else {
		const dateDiff = getDateDiff(firstDate, secondDate)

		printResult(dateDiff)
	}
}
