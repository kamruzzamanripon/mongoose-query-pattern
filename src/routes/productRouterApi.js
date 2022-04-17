const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();


router.get('/all-product-without-paination', ProductController.allProductWithOutPagination);
router.get('/all-product-without-paination-join-collection', ProductController.allProductWithOutPaginationAndJoinCollection);
router.get('/all-product-with-paination-join-collection', ProductController.allProductWithPaginationAndJoinCollection);
router.get('/group-wise-product-with-paination-join-collection', ProductController.groupWiseProductInfoWithPaginationAndJoinCollection);



module.exports = router;