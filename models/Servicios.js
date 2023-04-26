const {Schema, model} = require ('mongoose');

const ServicioSchema = Schema({

    nombre: {
        type: String,
        required: [true, 'El nombre del Servicio es Obligatoria'],
        unique: true
    },
    disponibilidad: {
        type: String,
        required: true
        //emun: ['DISPONIBLE', 'NO_DISPONIBLE']
    },
    estado: {
        type: Boolean,
        default: true
    }



});

module.exports = model('Servicio', ServicioSchema)