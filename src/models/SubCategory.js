const mongoose = require('mongoose');
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
    }
      
},{ timestamps: true, versionKey:false })


const SubCategory = mongoose.model('SubCategory', DataSchema, 'subCategories');
module.exports = SubCategory;