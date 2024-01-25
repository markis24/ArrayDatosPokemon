
// Parte 0 
// Acceder al JSON y listar los datos devueltos

pokemonArrays = [];
fetch("js/data/pokemon.json")
	.then((response) => response.json())
	.then((data) => {

		dades = data.pokemon;
		// Utilizar forEach para iterar sobre cada Pokémon y añadirlo al array

		dades.forEach((pokemon) => {
			pokemonArrays.push({
				// Añadiendo los campos que quiero mostrar
				"Id": pokemon.id,
				"Nombre": pokemon.name,
				"Img": pokemon.img,
				"Peso": pokemon.weight,
			});
		});

		// Mostrar el array en forma de tabla
		//		console.table(pokemonArrays);
	});

// Array de Peliculas
peliculasArray = [];
fetch("js/data/movies.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data.movies;

		dades.forEach((movies) => {
			peliculasArray.push({
				"Imagen": movies.url,
				"Nombre": movies.title,
				"Rating": movies.rating,
				"Año": movies.year,

			});
		});

		// Mostrar el array en forma de tabla
			//console.table(peliculasArray);
	});


// Array de Meteoritos
meteoritosArray = [];

fetch("js/data/earthMeteorites.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data;

		dades.forEach((data) => {
			meteoritosArray.push({
				"Id": data.id,
				"Nombre": data.name,
				"Masa": data.mass,
				"Año": data.year,
			});
		});

		// Mostrar el array en forma de tabla
		//	console.table(meteoritosArray);
	});

// Array de Municipios
municipiosArray = [];

fetch("js/data/municipis.json")
	.then((response) => response.json())
	.then((data) => {
		dades = data.elements;

		dades.forEach(dades => {
			municipiosArray.push({
				"Nombre": dades.municipi_nom,
				"Escudo": dades.municipi_escut,
				"Habitantes": dades.nombre_habitants,
				"Extension ": dades.extensio,
			})
		});
		//console.table(municipiosArray);
	});
