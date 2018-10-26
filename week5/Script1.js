function det(){
	let array = document.querySelectorAll('input')
	let determinant = 0;
determinant = (array[0].value*((array[4].value*array[8].value) - (array[5].value * array[7].value))) - 
(array[1].value*((array[3].value*array[8].value) - (array[5].value * array[6].value))) +
(array[2].value*((array[3].value*array[7].value) - (array[4].value * array[6].value)));
document.querySelector('#result').innerHTML = determinant;	
}
document.querySelector('#determinant').addEventListener('click', det);