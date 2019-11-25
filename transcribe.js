const raw = require('./raw.json')
const final = []
raw.forEach((
    { ID: id,
        nombre: name,
        TELÉFONO: phone,
        "TELÉFONO 2": phone2,
        calle: street,
        numero: number,
        comuna: commune,
        "LATITUD, LONGITUD": latlng,
        horarios: schedules,
        "pagina web": webpage,
        correo: mail }) => {
    final.push({
        id: parseInt(id),
        name,
        phone: phone2 ? `${phone}, ${phone2}` : phone,
        street,
        number,
        commune,
        latitude: parseFloat(latlng.split(',')[0] || 0), longitude: parseFloat(latlng.split(',')[1] || 0),
        schedules,
        webpage,
        mail
    })
})

console.log(final)