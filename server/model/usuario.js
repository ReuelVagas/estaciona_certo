let mongoose = require('mongoose'), Schema = mongoose.Schema

const usuarioSchema = new Schema({
    tipo: {type: String},
    nome: {type: String},
    email: {type: String, unique: true},
    telefone: {type: String}
},{collection: 'usuario'})

module.exports = mongoose.model('usuario', usuarioSchema, 'usuario')