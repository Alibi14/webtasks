/*function image(event) {
	let a = document.getElementById('a');
	let l1 = document.getElementById('l1');
	let l2 = document.getElementById('l2');
	let l3 = document.getElementById('l3');
	let l4 = document.getElementById('l4');
	let l5 = document.getElementById('l5');
	l1.onclick = function(event){
		a.src = l1.src;
	}
	l2.onclick = function(event){
		a.src = l2.src;
	}
	l3.onclick = function(event){
		a.src = l3.src;
	}
	l4.onclick = function(event){
		a.src = l4.src;
	}
	l5.onclick = function(event){
		a.src = l5.src;
	}
}*/
function omg(event){
	let imgChange = document.getElementsByTagName('img')[0].src = event.target.src;
}
document.body.addEventListener('click', omg)


	