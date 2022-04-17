const express = require('express');
const InvoiceController = require('../controllers/InvoiceController');
const router = express.Router();


router.get('/invoice-all', InvoiceController.invoiceAll);
router.get('/invoice-all-with-details-info', InvoiceController.invoiceAllInfoDetails);



module.exports = router;