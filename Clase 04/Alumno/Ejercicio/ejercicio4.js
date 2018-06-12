console.log('toy re loco')


var examResults = [7, 5, 6, 4, 3, 2, 8]
var jose = [5, 5, 28, 4, 65, 2, 78, 45, 7]



function promedio(examResult) {
    var note
    var total = 0

    for (var i = 0; i < examResult.length; i++) {
        note = examResult[i]
        total = total + note

    }
    var result = total / examResult.length
    return result


}

var resultado = promedio(jose)
console.log(resultado)

var pepe = promedio(examResults)
console.log(pepe)


// function square(number1) {
//     var result = number1 * number1

//     return result
// }

// var students1 = [ 'Costanza', 'Javier', 'Marcela', 'Ramiro', 'Enzo' ]

// var students2 = [ 'Magdalena', 'Alicia' ]

// showStudentsNames(students1)

// console.log('--------')

// showStudentsNames(students2)

// function showStudentsNames (students) {
//   var student

//   for (var i = 0; i < students.length; i++) {
//     student = students[i]
//     console.log(student)
//   }
// }

// var total

// for (var i = 0; i < examResults.length; i++) {
//   total = examResults[i]
//   console.log(total)
// }