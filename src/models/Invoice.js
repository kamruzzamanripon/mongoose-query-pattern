const mongoose = require('mongoose');
//const crypto = require('crypto')

const DataSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    productId: {
        type: Array,
        required: true
    }
      
},{ timestamps: true, versionKey:false })




const Invoice = mongoose.model('Invoice', DataSchema, 'invoices');
module.exports = Invoice;