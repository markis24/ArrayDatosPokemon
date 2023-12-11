			
// POKEMONS

let dades;
/*

// POKEMONS
fetch("js/data/pokemon.json")
.then((response) => response.json())
.then((data) => {
	dades = data.pokemon;		
	
	console.log(dades[0].name)
	console.log(dades[1].name)

});
*/
/*
let iniciar = location.reload();

function orderList(params) {
	
}
function searchList(params) {
	
}

function calcMitjana(params) {
	
}

function printList(params) {
	
}
*/
/*
// MUNICIPIS
fetch("js/data/municipis.json")
.then((response) => response.json())
.then((data) => {
	dades = data.elements;		
	
	console.log(dades[1].municipi_nom)
});


*/


/*
// METEORITS
fetch("js/data/earthMeteorites.json")
.then((response) => response.json())
.then((data) => {
	dades = data;		
	
	console.log(dades)
	console.log(dades[0].name)
});


// MOVIES
fetch("js/data/movies.json")
.then((response) => response.json())
.then((data) => {
	dades = data.movies;		
	
	console.log(dades)
	console.log(dades[0].title)
});

*/

// MOVIES
fetch("js/data/movies.json")
.then((response) => response.json())
.then((data) => {
	dades = data.movies;		
	
	console.log(dades)
	//console.log(dades[0].title)
	const iterador = dades.entries();
    for (const entrada of iterador) {
        const [name, valor] = entrada;
        document.write(`<p>Índice: ${}, Valor: ${valor}</p>`);
    }
});