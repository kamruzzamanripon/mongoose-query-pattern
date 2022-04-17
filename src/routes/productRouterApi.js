const express = require('express');
const ProductController = require('../controllers/ProductController');
const router = express.Router();


router.get('/all-product-without-paination', ProductController.allProductWithOutPagination);
router.get('/all-product-without-paination-join-collection', ProductController.allProductWithOutPaginationAndJoinCollection);



module.exports = router;