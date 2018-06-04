// // 1. Condicionales
// // - ìf

// console.log('init app')

// //falsy values-------------------------

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




// // 2. Operadores de comparación-------------------------------
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


// // 3. Operadores lógicos-------------------------------------------
// // - &&
// var value = promt('ingrese un numero')

// if (value >1 && value < 10) {
//     console.log(' el número esta entre 1 y 10 no inncluidos')
// }

// // - || los or se resulven antes de los &&



// // - !


// // - switch------------------------------------------------------
// var result = promt('ingrese un dia de la semana lunes,martes,miercoles,jueves,viernes,sabado,domingo')
// switch (result) {
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
//     case :'Ganó':
//     case :'gano':
//     case :'Gano':
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