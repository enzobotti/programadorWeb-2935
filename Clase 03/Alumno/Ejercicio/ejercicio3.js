var days = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Sabado',
    'Domingo',
    'Pato'
]

var day


for (var i = 0; i < days.length; i++) {
    day = days[i]

    switch (day) {
        case 'Lunes':
        case 'Martes':
        case 'Miércoles':
        case 'Miercoles':
        case 'Jueves':
        case 'Viernes':
            console.log(day + ' es un día de la semana')
            break
        case 'Sabado':
        case 'Sábado':
        case 'Domingo':
            console.log(day + ' es un fin de semana')
            break
        default:
            console.log(day + ' no es un dia valido')
            break
    }
}