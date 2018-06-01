<< << << < HEAD
// // 1. Condicionales
// // - ìf

// console.log('init app')

// //falsy values

// //boolean:false
// //Number: 0,-0, NaN
// //Strimg: ''
// //undefined, null

// //var value= {} [] es true siempre.

// var value = 1
// if (value) {
//     console.log('estoy adentro')
// }

// //false=0
// //true=1




// // 2. Operadores de comparación
// // - ===
// var result = promt('ingrese resultado')

// if ('ganó' === result) {
//     console.log('sumaste 3 puntos')
// } else {
//     if ('empató' === result) {
//         console.log('sumaste 1 punto')
//     } else {
//         if ('perdió' === result)
//             console.log('sumaste 0 punto')
//     }
// }


// // - !==
// var value = promt('ingrese un numero')

// varnparsedvalue = pasedFloat(value, 10)

// if (parsedvalue !== 2) {
//     console.log('el valor es distinto de 2')
// } else {
//     console.log('es valor igual a 2')

// }

// // - <

// var value = promt('ingrese un numero')

// if (name < 'pepe') {
//     console.log('esta antes en la tabla ascii')
// } else {
//     console.log('esta después en la tabla ascii')

// }

// // - >
// // - >=
// // - <=
// // 3. Operadores lógicos
// // - &&
// var value = promt('ingrese un numero')

// if (value > && value < 10) {
//     console.log(' el número esta entre 1 y 10 no inncluidos')
// }

// // - || los or se resulven antes de los &&



// // - !


// // - switch
// var dia = prompt('ingrese un dia de la semana, lunes,martes,miercoles,jueves,viernes,sabado,domingo')
// switch (dia) {
//     case 'lunes':
//     case 'martes':
//     case 'miercoles':
//     case 'jueves':
//     case 'viernes':
//         console.log('es un día habil')
//         break
//     case 'sabado':
//     case 'domingo':
//         console.log('es un fin de semana')
//         break
//     default:
//         console.log('no es un dia valido')
//         break
// }

// if('lunes'=== result)
// console.log('es un día habil')
// }else{
//   if('lunes'=== result) 
// }



// var result = promt('ingrese resultado, ganó, empató o perdió')
// switch (result) {
//     case 'ganó':
//     case 'Ganó':
//     case 'gano':
//     case 'Gano':
//         console.log('sumaste tres puntos')
//         break
//     case 'empató':
//         console.log('sumaste un punto')
//         break
//     default:
//         console.log('resultado no correcto')
//         break
// }
// //nota
// if ('ganó' === result) {
//     console.log('sumaste 3 puntos')
// } else {
//     if ('empató' === result) {
//         console.log('sumaste 1 punto')
//     } else {
//         if ('perdió' === result)
//             console.log('sumaste 0 punto')
//     }
// }


// // - ||
// // 4. Ciclos e iterciones
// // - for
// // - while
// // - do while
// // 5. Sentencias
// // - break
// // - continue
    ===
    ===
    =
    // 1. Condicionales
    // - ìf

    console.log('Init app')

// Falsy values

// Boolean: false
// Number: 0, -0, NaN
// String: ''
// undefined, null

// var value = []

// if (value) {
//   console.log('Estoy adentro')
// }

// console.log('Estoy afuera')

// var name = prompt('Ingresa tu nombre')

// if (name) {
//   console.log('Hola ' + name)
// } else {
//   name = prompt('Esta vez escribilo!')
//   if (name) {
//     console.log('Hola ' + name)
//   } else {
//     console.log('No escribiste nada dos veces!')
//   }
// }
// 2. Operadores de comparación
// - ===

// var result = prompt('Ingrese resultado', 'Ganó, Empató o Perdió')

// if ('Ganó' === result) {
//   console.log('Sumaste 3 puntos')
// } else {
//   if ('Empató' === result) {
//     console.log('Sumaste 1 punto')
//   } else {
//     if ('Perdió' === result) {
//       console.log('Sumaste 0 puntos')
//     } else {
//       console.log('Resultado no correcto')
//     }
//   }
// }

// - !==

// var value = prompt('Ingrese un número')

// var parsedValue = parseFloat(value, 10)

// if (parsedValue !== 2) {
//   console.log('El valor es distinto de 2')
// } else {
//   console.log('Es valor es igual a 2')
// }

// - <
// - >
// - >=
// - <=

// var value = prompt('Ingrese un número')

// if (value < 0) {
//   console.log('Es menor a cero', value)
// } else {
//   console.log('Es cero o mayor', value)
// }

// var name = prompt('Ingrese un número')

// if (name <= 'Pepe') {
//   console.log('Esta antes en la tabla ASCII')
// } else {
//   console.log('Esta después en la tabla ASCII')
// }

// 3. Operadores lógicos

// var value = prompt('Ingrese un número')

// - &&

// if (value > 1 && value < 10) {
//   console.log('El número está entre 1 y 10 no incluidos')
// }

// - ||

// var gender = prompt('Ingresa male o female')

// if (gender === 'male' || gender === 'female') {
//   console.log('Declaraste genero')
// } else {
//   console.log('Genero no definido dentro de las variables heteronormativas')
// }

// - !

// var name = prompt('Ingresá nombre')

// if (!name) {

// }

// - switch

// var result = prompt('Ingrese resultado', 'Ganó, Empató o Perdió')

// switch (result) {
//   case 'Ganó':
//   case 'ganó':
//   case 'Gano':
//   case 'gano':
//     console.log('Sumaste 3 puntos')
//     break
//   case 'Empató':
//     console.log('Sumaste 1 punto')
//     break
//   case 'Pedrió':
//     console.log('Sumaste 0 puntos')
//     break
//   default:
//     console.log('Resultado no correcto')
//     break
// }

// if ('Ganó' === result) {
//   console.log('Sumaste 3 puntos')
// } else {
//   if ('Empató' === result) {
//     console.log('Sumaste 1 punto')
//   } else {
//     if ('Perdió' === result) {
//       console.log('Sumaste 0 puntos')
//     } else {
//       console.log('Resultado no correcto')
//     }
//   }
// }
>>>
>>>
> 70223 bf5d19080af77cbf62a2a8f0daba3ed698a