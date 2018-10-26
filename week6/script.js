function ClickFn() {
	event.currentTarget.dataset.status = "done";
}
let divItems = document.querySelectorAll("div");

for (let item of divItems){
	item.addEventListener("click", ClickFn);
}
