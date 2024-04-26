/*Variables*/

let variableSinValor

let booleano1 = true
let booleano2 = false

const PI = 3.14
const TAU = PI * 2

/*Boleanos*/
let booleanoAnd = booleano1 == booleano2
let booleanoNot 
booleanoNot = ! booleano1
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2))

/*Operadores*/
let incrementarDesp = 2 
let resultadoDesp = incrementarDesp ++

let incrementarAntes = 2
let resultadoAntes = ++ incrementarAntes

/*Bucles*/
let contarHasta10_2 = 0
for ( let i=0; i < 10; i++ ) {
    contarHasta10_2++
}

let postI = 0
let postJ = 0

for ( let i=0; i < 11; i++ ) {
    postI = postI + postJ++
}

/*Sacar numero par*/
/*el porcentaje es para divir entre dos y saber si es par o no el resto de la division */
 let sumaPares = 0
 for ( let i=0; i < 10; i++ ) {
    if (i % 2 === 0)
    sumaPares=sumaPares + i
}

/* Individual*/

/*Variables*/

let variableValorNumerico = 0  
const MiNombre = 'marjorie'
const MiNumeroFav = 10 

/*Boleanos*/
 let booleanoOr = booleano1 || booleano2

 let booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (varianbleValorNumerico <= MiNumeroFav)
 
 let seisNoEsNueve = 6 != 9

 let booleanoMix2 = (variableValorNumerico > 0 || variableValorNumerico <- (MiNumeroFav * TAU));

/*Operadores*/

let valorSuma = MiNumeroFav + variableValorNumerico

let valorResta = MiNumeroFav - variableValorNumerico

let valorMultiplicacion = MiNumeroFav * variableValorNumerico

let valorDivision = MiNumeroFav / 3

/*Bucles*/

let contarHasta10 = 0
while ( contarHasta10 !== 10 ) {
        ++contarHasta10
}

let preI = 0
let preJ = 0
for ( let i=0; i < 11; i++ ) {
    preI = preI + ++preJ
}


let sumaImpares = 0
for (let i=0; i < 10; i++) {
    if ( i % 2 !== 0)
    sumaImpares = sumaImpares + i
}