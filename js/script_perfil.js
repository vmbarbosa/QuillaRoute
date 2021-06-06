function obtenerdatos(){
    let nombre = document.getElementById("nombre").value;
    let edad = parseFloat(document.getElementById("edad").value);
    let genero = document.getElementById("genero").value;
    let ciudad = document.getElementById("ciudad").value;
    let direccion = document.getElementById("direccion").value;

    let Mensaje = "Guardado con exito";

    console.log(nombre);
    console.log(edad);
    console.log(genero);
    console.log(ciudad);
    console.log(direccion);
    console.log(Mensaje);

}
