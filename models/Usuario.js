const mongoose = require('mongoose');  //importamos mongoose

const UsuariosSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true  //para eliminar los espacios en blanco al inicio y al final
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true //para solo existe un registro x cada correo
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    registro:{
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('Usuario', UsuariosSchema);