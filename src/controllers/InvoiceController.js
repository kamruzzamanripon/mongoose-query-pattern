const Invoice = require("../models/Invoice");


module.exports = class InvoiceController{

    static invoiceAll = async(req, res)=>{
        try{
            const invoiceAll = await Invoice.find().exec();
            return res.status(200).json({
              code: 200,
              message: "All invoice",
              data: invoiceAll,
            });
  
        }catch(error){
          res.status(501).json({
            code: 501,
            message: error.message,
            error: true,
          });
        }
    }


    static invoiceAllInfoDetails = async(req, res)=>{
        try{
            const invoiceAllInfoDetails = await await Invoice.aggregate([
                {$lookup:
                    //join users collection
                    {
                       from: "users",   // collection to join
                       localField: "userId",  //this field as refereence for User collection id
                       foreignField: "_id",  //this field is category id to join product collecton on base one catId === _id;
                       as: "userInfo"    // output array field
                    }
                },
                //join products collection
                {$lookup: {
                    from: "products",
                    let: { "products": "$productId" },
                    pipeline: [
                        { $match: { $expr: { $in: [ "$_id", "$$products" ] } } }
                    ],
                    as: "productInfo"
                  }
                },
                //join categories collection
                {$lookup:
                    {
                        from: "categories",   
                        localField: "productInfo.catId",  
                        foreignField: "_id",  
                        as: "categoryInfo"    
                    }
                },
                //join subCategory collection 
                {$lookup:
                    {
                        from: "subCategories",   
                        localField: "productInfo.subCatId",  
                        foreignField: "_id",  
                        as: "subCategoryInfo"    
                    }
                }

             ]
            ).exec();

        return res.status(200).json({
              code: 200,
              message: "All invoice with details information",
              data: invoiceAllInfoDetails,
            });
  
        }catch(error){
          res.status(501).json({
            code: 501,
            message: error.message,
            error: true,
          });
        }
    }
}