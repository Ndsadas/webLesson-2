import { DateTime } from './luxon.js'
import { printCalcError } from './util.js'
import { getDataCalc } from './datacalc.js';
import '../css/style.css'

const form = document.getElementById('timer');
const stopCalc = document.getElementById('stop');
let tick

form.onsubmit = (event) => {
	event.preventDefault();
	const formDate = new FormData(event.target)
	const name = formDate.get('inp');
	
	tick = setInterval(function(){
	const endTime = new Date().getTime();
	const now = DateTime.fromISO(name).ts;
	const result = now - endTime;

	if (result > 0) {
		getDataCalc(result)
 } else {
	let sound = new Howl({
		src: ['audio/sound1.mp3']
	});
	sound.play()
	clearInterval(tick)
	printCalcError("Время закончилось!")
 }

}, 1000)
}
 stopCalc.addEventListener('click', function() {
	clearInterval(tick);
})