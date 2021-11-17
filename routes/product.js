const express = require('express');
const router = express.Router();
const { productController} = require("../controllers/products")

// Home page for products

router.get('/',  productController.getAll)

router.post('/', productController.create)
router.get('/:id', productController.getBYId)

module.exports = router;