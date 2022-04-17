const Product = require("../models/Product");
const User = require("../models/User");


module.exports = class ProductController {

    //Show all product list with-out Pagination
    static allProductWithOutPagination = async(req, res)=>{
        try{
            const allProductInfo = await Product.find().exec();
            return res.status(200).json({
              code: 200,
              message: "Product List",
              data: allProductInfo,
            });
  
        }catch(error){
          res.status(501).json({
            code: 501,
            message: error.message,
            error: true,
          });
        }
    }


    //Show all Product info and also its related categroy and subCategory info base on theri Id
    static allProductWithOutPaginationAndJoinCollection = async(req, res)=>{
        try{
            const Users = await Product.find().exec();

            return res.status(200).json({
              code: 200,
              message: "Users List with related information",
              data: Users,
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