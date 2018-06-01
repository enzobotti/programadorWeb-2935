var result = promt('ingrese un dia de la semana lunes,martes,miercoles,jueves,viernes,sabado,domingo')
switch (result) {
    case 'lunes':
    case 'martes':
    case 'miercoles':
    case 'jueves':
    case 'viernes':
        console.log('es un día habil')
        break
    case 'sabado':
    case 'domingo':
        console.log('es un fin de semana')
        break
    default:
        console.log('no es un dia valido')
        break
}