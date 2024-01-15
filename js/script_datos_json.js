
// Array de Pokemons

fetch("js/data/pokemon.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data.pokemon;

		// Crear un array para almacenar la información de cada Pokémon
		let pokemonArray = [];

		// Utilizar forEach para iterar sobre cada Pokémon y añadirlo al array
		dades.forEach((pokemon) => {
			pokemonArray.push({
				"Nombre": pokemon.name
			});
		});

		// Mostrar el array en forma de tabla
		 console.table(pokemonArray);
	});

// Array de Municipios

fetch("js/data/municipis.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data.elements;

		let municipisArray = [];

		dades.forEach(dades => {
			municipisArray.push({
				"Nombre ": dades.municipi_nom
			})
		});
	//	console.table(municipisArray);
	});
// Array de Peliculas

fetch("js/data/movies.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data.movies;

		let moviesArray = [];

		dades.forEach((movies) => {
			moviesArray.push({
				"Nombre": movies.title
			});
		});

		// Mostrar el array en forma de tabla
	//	 console.table(moviesArray);
	});



// Array de Meteoritos

fetch("js/data/earthMeteorites.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data;

		let meteoritosArray = [];

		dades.forEach((data) => {
			meteoritosArray.push({
				"Nombre": data.name
			});
		});

		// Mostrar el array en forma de tabla
		// console.table(meteoritosArray);
	});



/*


// Funciones asincronas
async function getPeliculas(){
	const response = await response.json();
	peliculas = data.movies;
	return data.movies
};


*/