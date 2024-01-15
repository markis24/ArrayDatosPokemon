

function iniciar() {
	location.reload();

}

function orderList(params) {
	// Boton para ordenar de manera ascendente y de manera descendente

}
function ordenAscendente() {

}

function ordenDescendente() {

}
function searchList(params) {
	let buscarPokemon = parseInt(prompt("Que elemento quieres buscar ?"));

}


function calcMitjana(params) {
	let numeroMitjana = parseInt(prompt("Escribe un numero para hacer el calculo"));
	let resultadoNumeroMitjana = numeroMitjana.toFixed(2);
	alert("Este es el resultado " + resultadoNumeroMitjana)
}

function printList(params) {

	// Hacer tabla con DOM en javascript 
	// para imprimir los atributos de los pokemons

	// Array Multidimensional 

	let pokemonArrays = [
		["Bulbasaur", "http://www.serebii.net/pokemongo/pokemon/001.png", "6.9 kg"],
		["Ivysaur", "http://www.serebii.net/pokemongo/pokemon/002.png", "13.0 kg"]
	];
	// Iterando el array pokemonArrays
	pokemonArrays.forEach((pokemon) => {
		pokemon.forEach((data) => {
			console.log(data);
		})
	})
}

function tablaDOM() {

	let tabla = document.createElement("table");
	tabla.style.border = "1px solid black";
	// Creacion de for de filas
	for (let i = 1; i <= 4; i++) {
		// Crea las filas de la tabla
		let fila = document.createElement("tr");
		// Creacion de for columnas
		for (let j = 1; j <= 4; j++) {
			// Crea las columnas de la tabla
			let columna = document.createElement("td");
			let textoCelda = document.createTextNode(i + " : " + j);
			columna.appendChild(textoCelda);
			fila.appendChild(columna);
			columna.style.border = "1px solid black";
			columna.style.padding = "10px";
		}
		tabla.appendChild(fila);
	}

	document.body.appendChild(tabla);
}