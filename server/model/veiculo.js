let mongoose = require('mongoose'), Schema = mongoose.Schema

const veiculoSchema = new Schema({
    placa: {type: String}
},{collation: 'veiculo'})

veiculo = ongoose.model('veiculo', talaoSchema, 'veiculo')

module.exports = {veiculo, veiculoSchema}