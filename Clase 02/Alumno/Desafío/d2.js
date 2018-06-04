//console.log('Init app')

var gender = prompt("Cual es tu genero, male, female or another?");
var age = prompt('Cual es tu edad?')


if (gender === 'male' && age < 18) {
    console.log('Sr. usted es menor de edad no puede ingresar.')
}
if (gender === 'male' && age > 18) {
    console.log('Sr. usted es mayor de edad puede ingresar.')
}

if (gender === 'female' && age < 18) {
    console.log('Sra. usted es menor de edad no puede ingresar.')
}
if (gender === 'female' && age > 18) {
    console.log('Sra, usted es mayor de edad puede ingresar.')
}

if (gender === 'another' && age < 18) {
    console.log('Sx. usted es menor de edad no puede ingresar.')
}
if (gender === 'another' && age > 18) {
    console.log('Sx. usted es mayor de edad puede ingresar.')
}







// // if ('male' === result &&)

// //     console.log('Hola ' + name)

// if (name < 'pepe') {
//   //     console.log('esta antes en la tabla ascii')
//   // } else {
//   //     console.log('esta después en la tabla ascii')

//   // }