// # Repaso de Git y GitHub
// - git add .
// - git commit -m "Mensaje"
// - git push
// - git pull
// - git pull <repo> <branch>
// - ¿Como solucionar conflictos?

// # Bucles e iteración

console.log('init app')


// 1. Sentencias de blucle
//  - while
// var couter =
//     while (couter > 6) {
//         console.log(couter)
//         couter = couter + 1
//     }
// var name = prompt('ingrese su nombre')


// while (!name) {
//     name = prompt('ingrese su nombre')
// }
// console.log('hola ' + name)

//  - do while

// var name

// do {
//     name = prompt('ingrese su nombre')
// } while (!name)

// console.log('Hola ' + name)


// while (!name) {
//     name = prompt('ingrese su nombre')
// }
// console.log('hola ' + name)


//  - for
// // (i++) === 
// for (var i = 0; i < 3; i++) {
//     console.log(i)
// }
// var students = ('Constanza', 'Javier', 'Marcela')

// var student

// for (var i = 0; i < 3; i++) {
//     student = students[i]
//     console.log(student)
var students = ('Constanza', 'Javier', 'Marcela', 'adrian')

var student
for (var i = 0; i < 3; i++) {
    student = students[i]

    if (student !== 'adrian') {
        console.log('te encontre constanza en la posicion '
            i)

    }
}


// 2. Sentencias de corte
//  - break
//  - continue
//