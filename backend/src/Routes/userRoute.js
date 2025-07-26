const { Router } = require('express');
const userController = require("../controllers/userController");
const userRoute = Router();

userRoute.post("/register",userController.register);
userRoute.post("/login",userController.login);

module.exports = userRoute;