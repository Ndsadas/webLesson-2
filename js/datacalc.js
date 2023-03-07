import { DateTime } from './luxon.js';


export function getDateDiff (dataFrom, dataTo) {
	const dataFromObj = DateTime.fromISO(dataFrom);
	const dataToObj = DateTime.fromISO(dataTo);

	return dataToObj.diff(dataFromObj, ['years', 'months', 'days']).toObject();
}

export function getDataCalc(result) {
	let days = Math.floor(result / (1000 * 60 * 60 * 24));
	let hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let mins = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
	let secs = Math.floor((result % (1000 * 60)) / 1000);

	document.getElementById('daysTime').innerHTML = days + "<span> - дней </span>";
	document.getElementById('hoursTime').innerHTML = hours + "<span> - часов </span>";
	document.getElementById('minsTime').innerHTML = mins + "<span> - минут </span>";
	document.getElementById('secTime').innerHTML = secs + "<span> - секунд </span>";
}


