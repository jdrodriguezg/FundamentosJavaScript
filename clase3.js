/* En esta clase aprendemos sobre los números en JS */

var edad = 22

//edad = edad + 1
edad += 1

var peso = 69

peso = peso - 2

var sandwich = 1

//Sumando dos números
peso = peso + sandwich

var hacerCardio = 3

peso -= hacerCardio

//Con decimales

var precioVino = 50000.534
var cuantosVinos = 3
var total = precioVino * cuantosVinos // Esperamos un 150000.9 pero retorna un 150000.9000000002
                                      // porque js no es muy preciso en operaciones con decimales


var totalCorregido = precioVino * 100 * cuantosVinos / 100 // Da 150,000.9 pero solo funciona cuando sabemos que tiene un decimal

var totalConMath = Math.round(precioVino * 100 * cuantosVinos) / 100 // Da 150,000.9 y funciona para los decimales que sean en el precio del vino.

//Acá aprendemos a decidir cuántos decimales se quiere en la respuesta

var totalStr = totalConMath.toFixed(3) //Queremos 3 decimales, pero está en string

var totalFloat = parseFloat(totalStr) //Volvemos el string a float


var pizza = 8
var personas = 2
var pizzaPorPersona = pizza / personas

