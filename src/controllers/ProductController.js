const Product = require("../models/Product");
const mongoose = require("mongoose");
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


    //Show all Product info and also its related categroy and subCategory info base on their Id
    static allProductWithOutPaginationAndJoinCollection = async(req, res)=>{
        try{
            //const Users = await Product.find().exec();
            const allProductInfo = await Product.aggregate([
                {$lookup:
                    {
                       from: "categories",   // collection to join
                       localField: "catId",  //this field as refereence for category collection id
                       foreignField: "_id",  //this field is category id to join product collecton on base one catId === _id;
                       as: "categoryInfo"    // output array field
                    }
                },
                {
                  $lookup: {
                      from: "subCategories",
                      localField: "subCatId",
                      foreignField: "_id",
                      as: "subCategoryInfo"
                  }
                },
                //For presentation
                {
                  "$project": {
                  "_id": 1,
                  "name": 1,
                  "shopName": 1,
                  "categoryInfo._id": 1,
                  "categoryInfo.name": 1,
                  "subCategoryInfo._id": 1,
                  "subCategoryInfo.name": 1,
                  
                }
              }
            ]
            ).exec();

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



    //Show all Product info and also its related categroy and subCategory info base on their Id and all data include pagination
    static allProductWithPaginationAndJoinCollection = async(req, res)=>{
        try{
            //const Users = await Product.find().exec();
            const options = {
                page: 1,
                limit: 10,
              };
            const allProductInfo = await Product.aggregate([
                {$lookup:
                    {
                       from: "categories",   // collection to join
                       localField: "catId",  //this field as refereence for category collection id
                       foreignField: "_id",  //this field is category id to join product collecton on base one catId === _id;
                       as: "categoryInfo"    // output array field
                    }
                },
                {
                  $lookup: {
                      from: "subCategories",
                      localField: "subCatId",
                      foreignField: "_id",
                      as: "subCategoryInfo"
                  }
                },
                //For presentaiton
                {
                  "$project": {
                  "_id": 1,
                  "name": 1,
                  "shopName": 1,
                  "categoryInfo._id": 1,
                  "categoryInfo.name": 1,
                  "subCategoryInfo._id": 1,
                  "subCategoryInfo.name": 1,
                  
                }
              }
            ]
            ).exec();
       
            const productInfoAddPagination =  await Product.aggregatePaginate(allProductInfo, options);

            return res.status(200).json({
              code: 200,
              message: "Product List with pagination",
              data: productInfoAddPagination,
            });
  
        }catch(error){
          res.status(501).json({
            code: 501,
            message: error.message,
            error: true,
          });
        }
    }


    static groupWiseProductInfoWithPaginationAndJoinCollection = async(req, res)=>{
        try{
            
            const allProductInfo = await Product.aggregate([
                {$lookup:
                    {
                       from: "categories",   // collection to join
                       localField: "catId",  //this field as refereence for category collection id
                       foreignField: "_id",  //this field is category id to join product collecton on base one catId === _id;
                       as: "categoryInfo"    // output array field
                    }
                },
                {
                  $lookup: {
                      from: "subCategories",
                      localField: "subCatId",
                      foreignField: "_id",
                      as: "subCategoryInfo"
                  }
                },
                //For presentaiton
                {
                  "$project": {
                  "_id": 1,
                  "name": 1,
                  "shopName": 1,
                  "categoryInfo._id": 1,
                  "categoryInfo.name": 1,
                  "subCategoryInfo._id": 1,
                  "subCategoryInfo.name": 1,
                  
                }
              },
              {
                $group: {
                    _id: { shopName: "$shopName" },
                     details: { $push: '$$ROOT' },
                     count: {$sum: 1},
                   },
              }
            ]
            ).exec();
       
            return res.status(200).json({
              code: 200,
              message: "Product List with pagination",
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











}