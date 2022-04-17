const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
var aggregatePaginate = require("mongoose-aggregate-paginate-v2");
//const crypto = require('crypto')

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    },
    catId: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    subCatId: {
        type: mongoose.Types.ObjectId,
        ref: "SubCategory",
        required: true
    },
    shopName: {
        type: String,
        required: true
    }
      
},{ timestamps: true, versionKey:false })

DataSchema.plugin(mongoosePaginate);
DataSchema.plugin(aggregatePaginate);


const Product = mongoose.model('Product', DataSchema, 'products');
module.exports = Product;