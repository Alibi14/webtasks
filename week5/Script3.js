function addStudent() {
	const q = true;
	let va1 = document.querySelector('#name').value;
	let va2 = document.querySelector('#surname').value;
	if(!va1){
		document.querySelector('#name').classList.add('error');
		q = false;
	}
	else{
		document.querySelector('#name').classList.remove('error');
	}
	if(!va2){
		document.querySelector('#surname').classList.add('error');
		q = false;
	}
	else{
		document.querySelector('#surname').classList.remove('error');
	}
	if(q){
		addTable();
	}
}

	function addTable(){
		let name = document.querySelector('#name').value;
		let surname = document.querySelector('#surname').value;
		let faculty = document.querySelector('#faculty').value;
	
	let table = document.querySelector('#students');
	let newRow = table.insertRow(table.rows.lenght);
	let cell1 = newRow.insertCell(0);
	let cell2 = newRow.insertCell(1);
	let cell3 = newRow.insertCell(2);

	cell1.innerHTML = name;
	cell2.innerHTML = surname;
	cell3.innerHTML = faculty;
}
	document.querySelector('#addStudent').addEventListener('click', addStudent)
