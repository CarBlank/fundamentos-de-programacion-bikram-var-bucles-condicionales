/* Variables */

let variableSinValor

let booleano1 = true
let booleano2 = false

const PI = 3.14

const TAU = (PI * 2)

/* Booleanos */

let booleanoAnd = (booleano1 < booleano2)

let booleanoNot = ( !booleano1 )

const booleanoMix0 = (booleano1 || booleano2 && booleano1 || booleano1 && !booleano2)

/* Operadores */

let incrementarDesp = 2
let resultadoDesp = incrementarDesp++ 


let incrementarAntes = 2
let resultadoAntes = ++incrementarAntes

/* Bucles */

let contarHasta10_2 = 0
for ( let i=0; i < 10; i++ ) {
    contarHasta10_2++ === 0 /* es necesario poner === 0  */
}

/* let contarHasta10_2 = 0
contarHasta10_2 === 10 
console.log(contarHasta10_2)

for (let contarHasta10_2 = 0; contarHasta10_2 < 10; contarHasta10_2++) {
    console.log(`Vuelta nº ${contarHasta10_2 + 1}`) /* contarHasta10_2 + 1
    
     }*/
  
   

let postI = 0
let postJ = 0

for (i = 0 ; i < 11 ; i++) {
    console.log(postI = postI + postJ++)

}


let sumaPares = 0

for (let i=0 ; i<10 ; i++) {
    if (i % 2 === 0 ) /* porque === es necesario */
    sumaPares = sumaPares + i
}


/* PROYECTO */

/* Variables */

let variableValorNumerico = 20

const MiNombre = 'tu nombre'

const MiNumeroFav = 10


/* Booleanos */

let booleanoOr = (booleano1 || booleano2) /* hace falta parentesis */

let booleanoMix1 = (booleano1 && (TAU/2 == PI)) || (variableValorNumerico >= MiNumeroFav)

let seisNoEsNueve = 6 !== 9

let booleanoMix2 = (variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU)) /* que es el guion */


/* Operadores */

let valorSuma = MiNumeroFav + variableValorNumerico

let valorResta = MiNumeroFav - variableValorNumerico
/* 
let valorMultiplicación = MiNumeroFav * variableValorNumerico 

let valorDivisión = MiNumeroFav / 3  */


/* Bucles */

let contarHasta10 = 0  /* porque no es i */
while (contarHasta10 < 10) {
    contarHasta10++
}

let preI = 0 /* porque aqui se usa i */
let preJ = 0

for (i = 0 ; i < 11 ; i++) {
    preI = preI + ++preJ
}

let sumaImpares = 0
for (i = 0 ; i < 10 ; i++) {
    if (i % 2 !== 0)  /* no entiendo bien */
    sumaImpares = sumaImpares + i
}


