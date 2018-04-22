var elemButtonClass = document.getElemetsByClassName("button");
var ilosc_Elem = elemButtonClass.length;
var textContent ="";
for (var i = 0; i <= ilosc_Elem i++){
	textContent = elemButtonClass[i];
	console.log(textContent.innerText);
}