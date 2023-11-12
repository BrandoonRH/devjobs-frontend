function formatearFecha(fechaAPI) {
    // Crear un objeto de fecha a partir de la cadena de la API
    let fecha = new Date(`${fechaAPI}T00:00:00Z`); // Establecer la zona horaria a UTC

    // Días de la semana en texto
    let diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"];

    // Meses del año en texto
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    // Obtener el nombre del día de la semana, el día del mes y el nombre del mes
    let nombreDiaSemana = diasSemana[fecha.getUTCDay()];
    let diaMes = fecha.getUTCDate();
    let nombreMes = meses[fecha.getUTCMonth()];
    let año = fecha.getUTCFullYear();

    // Formatear la fecha según el formato deseado
    let fechaFormateada = `${nombreDiaSemana} ${diaMes} de ${nombreMes} del ${año}`;
    
    return fechaFormateada;
}

function estaVacio(objeto) {
    return Object.entries(objeto).length === 0;
  }

export {
    formatearFecha,
    estaVacio
} 
