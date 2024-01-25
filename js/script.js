
// Parte 0 
// Acceder al JSON y listar los datos devueltos
async function miProgramaAsincrono() {
	try {
	  const response = await fetch("js/data/movies.json");
	  const data = await response.json();
  
	  const dades = data.movies;
  
	  const peliculasArray = dades.map((movies) => ({
		"Imagen": movies.url,
		"Nombre": movies.title,
		"Rating": movies.rating,
		"Año": movies.year,
	  }));
  
	  console.table(peliculasArray);
	} catch (error) {
	  console.error("Error al obtener o procesar los datos:", error);
	}
  }
  
  // Llamar a la función principal asincrónica
  miProgramaAsincrono();
  

  
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

// Parte 1
// Mostrar los elementos del array en una tabla del DOM

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

	// Buscar palabras que contengan la letra que hemos escrito
	let inputSearch = document.getElementById('txtSearch')
	inputSearch.addEventListener('input', (e) => {
		console.log(inputSearch.value)
	});

}


function printList(params) {

	// Hacer tabla con DOM en javascript 
	// para imprimir los atributos de los pokemons
	// Mostrar todas las arrays en una tabla en diferentes paginas
	// Array Multidimensional 

	pokemonArrays.forEach((pokemon) => {
		document.write(`<p>${pokemon.Id}</p>`);
		document.write(`<p>${pokemon.Nombre}</p>`);
		document.write(`<p>${pokemon.Img}</p>`);
		document.write(`<p>${pokemon.Peso}</p>`);

	})

	municipiosArray.forEach((dades) => {
		document.write(`<p>${dades.Nombre}</p>`);
		document.write(`<p>${dades.Escudo}</p>`);
		document.write(`<p>${dades.Habitantes}</p>`);
		document.write(`<p>${dades.Extension}</p>`);

	})


	peliculasArray.forEach((movies) => {
		document.write(`<p>${movies.Nombre}</p>`);
		document.write(`<p>${movies.Imagen}</p>`);
		document.write(`<p>${movies.Rating}</p>`);
		document.write(`<p>${movies.Año}</p>`);

	})

	meteoritosArray.forEach((data) => {
		document.write(`<p>${data.Id}</p>`);
		document.write(`<p>${data.Nombre}</p>`);
		document.write(`<p>${data.Masa}</p>`);
		document.write(`<p>${data.Año}</p>`);


	})

}
/*
function calcMitjana(numeroMitjana) {
	let numeroMitjana = parseInt(prompt("Escribe un numero para hacer el calculo"));
	let resultadoNumeroMitjana = numeroMitjana.toFixed(2);
	alert("Este es el resultado " + resultadoNumeroMitjana)
}


// Tabla con DOM para mostrar 
// los datos de cada uno de los arrays
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
			let textoCelda = document.createTextNode(j);
			columna.appendChild(textoCelda);
			fila.appendChild(columna);
			columna.style.border = "1px solid black";
			columna.style.padding = "10px";
		}
		tabla.appendChild(fila);
	}

	document.body.appendChild(tabla);
}
/*
// Parte 2
// Creacion del grafico de pokemos

// Obtener el elemento canvas con el id 'myChart'
const ctx = document.getElementById('myChart');

// Crear una nueva instancia de Chart en el canvas con el contexto obtenido
new Chart(ctx, {
    // Tipo de gráfico: área polar
    type: 'polarArea',
    
    // Configuración de datos
    data: {
        labels: ["Grass", "Poison", "Fire", "Flying", "Water", "Bug", "Normal", "Electric", "Ground", "Fighting", "Psychic", "Rock", "Ice", "Ghost", "Dragon"],
        datasets: [{
            label: "Grafico Pokemons",
            data: [14, 33, 12, 19, 32, 12, 24, 9, 14, 8, 14, 11, 5, 3, 3],
            backgroundColor: [
					'rgba(255, 99, 132,0.5 )',
					'rgba(75, 192, 192,0.5 )',
					'rgba(255, 205, 86,0.5 )',
					'rgba(201, 203, 207,0.5 )',
					'rgba(54, 162, 235,0.5 )'
            ],
            borderColor: []
        }]
    },

    // Opciones del gráfico (en este caso, no se proporcionan opciones específicas)
    options: {}
});

/*
// Crear una nueva instancia de Chart en el canvas con el contexto obtenido
new Chart(ctx, {
	// Tipo de gráfico: área polar
	type: 'polarArea',

	// Configuración de datos
	data: data,

	// Opciones del gráfico (en este caso, no se proporcionan opciones específicas)
	options: {}
});
*/

// Parte 3


// Parte 4