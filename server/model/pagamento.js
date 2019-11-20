let mongoose = require('mongoose'), Schema = mongoose.Schema

const pagamentoSchema = new Schema ({
    forma: {type: String}
}, {collection: 'formaPagamento'})

module.exports = mongoose.model('formaPagamento', formaPagamentoSchema, 'formaPagamento')