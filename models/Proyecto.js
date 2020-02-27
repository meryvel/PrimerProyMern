const mongoose = require ('mongoose');

const ProyectoScheme = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId, //referencia al usuario, ya que cada uno tiene un id, seria como un joy en sql
        ref: 'Usuario' //este ref tiene que ser el nombre del modelo al que hace referencia el object del type y se va a relacionar automaticamente
    },
    creado: {
        type: Date,
        default: Date.now()  //fecha de hoy
    }
});

module.exports = mongoose.model('Proyecto', ProyectoScheme);