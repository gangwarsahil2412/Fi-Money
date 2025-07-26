const { Router } = require('express');
const productController = require("../controllers/productController");
const productRoute = Router();
const { userAuthmiddleware } = require("../middleware/userAuthVerify");


productRoute.post("/", userAuthmiddleware, productController.addProduct);
productRoute.get("/", userAuthmiddleware,  productController.getProducts);
productRoute.put("/:id/quantity",userAuthmiddleware, productController.updateQuantity);

module.exports = productRoute;