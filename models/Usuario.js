const {Schema, model} = require('mongose');

const UsuarioSchema = Schema({
    
    nombre: {
        type: String,
        required: [true, 'El nombre es Obligatorio']
    },
    correo: {
        type: String,
        required: [true, 'El correo es Obligatorio'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contra es obligatorio']
    }, 
    estado: { 
        type: Boolean,
        default: true
    }

})

module.exports = model('Usuario', UsuarioSchema)
