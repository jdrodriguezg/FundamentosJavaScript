/* En esta clase vemos algunos métodos que actúan
   sobre un string y resolvemos un desafío propu-
   esto por el profesor */

var holaMundo = 'Hellow World JS';
var nombre = 'Juan', apellido = 'Rodríguez', peso;
peso = 73.3
console.log('Hola, mi nombre es ' + nombre + ' ' + apellido +
' y peso ' + peso + 'kg');

//Volver un texto en mayuscula
//Clase #2
var nombreCompletoMayuscula = nombre.toUpperCase() + ' ' + apellido.toLowerCase();
var primeraLetraNombre = nombre.charAt(0);
var tamañoNombre = nombre.length;
var nombreCompleto = `${nombre} ${apellido}`; //Concatena. En las llaves se puede escribir código js
var str = apellido.substr(1, 4); //Lo que hace es obtener un substring del string
//DESAFIO
//Encontrar la última letra de tu nombre
var ultimaLetraNombre = nombre.charAt(3);


//RESOLVIENDO DESAFIO CLASE#3

var nombre = 'CualquierNombre'

var tamNom = nombre.length;
var ultimaLetra = nombre.charAt(tamNom - 1)

var respuesta = ('La última letra de tu nombre es: ' + ultimaLetra)
console.log(respuesta)
//FIN DESAFIO CLASE#3