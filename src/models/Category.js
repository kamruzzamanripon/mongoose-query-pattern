const mongoose = require('mongoose');
//const crypto = require('crypto')

const DataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter name'],
        trim: true,
        maxLength: [100, 'Product name cannot exceed 100 characters']
    }
      
},{ timestamps: true, versionKey:false })


const Category = mongoose.model('Category', DataSchema, 'categories');
module.exports = Category;