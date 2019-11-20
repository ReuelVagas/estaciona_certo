let mongoose = require('mongoose'), Schema = mongoose.Schema
let veiculoSchema = require('./veiculo').veiculoSchema


const talaoSchema = new Schema({
    pediodo: {type: Number},
    dataCriacao:  {type: Date, default: Date.now},
    valor: {type: Number},
    dataEncerramento: {type: Number}, // nao pensei o como, entao so iniciei
    status: {type: String},
    local: {type: String},
    veiculo: [veiculoSchema]
},{collection: 'talao'})

module.exports = mongoose.model('talao', talaoSchema, 'talao')