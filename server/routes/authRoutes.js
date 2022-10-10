const express = require("express");
const router = express.Router();
const { signup, signout, signin, isSignedIn } = require('../controllers/authControllers')


router.post("/signup", signup);
router.post("/signout", signout);
router.post("/signin", signin);
router.post("/isSignedIn", isSignedIn);




module.exports = router ;
