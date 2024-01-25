// Modificar el DOM
// Pedir al usuario filas y columnas hay que mostrar el numero de filas y columnas

// Funcion creacion tabla (filas,columnas)
function crear_tabla(filas, columnas) {
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
        let textoCelda = document.createTextNode( i );
        columna.appendChild(textoCelda);
        fila.appendChild(columna);
        columna.style.border = "1px solid black";
        columna.style.padding = "10px";
      }
      tabla.appendChild(fila);
    }
  
    document.body.appendChild(tabla);
  }
  
  // El programa nos pide filas y columnas cuando damos al boton
  
  let boton = document.getElementById("btn");
  boton.addEventListener("click", function () {
    let filas = parseInt(prompt("Número de filas"));
    let columnas = parseInt(prompt("Número de columnas"));
    crear_tabla(filas, columnas);
  });
  