const express = require('express');

const router = express.Router();

const {register,login} = require("../controller/auth.controller");
const { registerValidation, validation, loginValidation } = require('../middlewares/validator');
const isAuth = require('../middlewares/isAuth');

// Routes
router.get("/test", (req, res) => {
    res.status(200).json("Ceci est un test");
});

// Register = sign-up


router.post("/register",registerValidation(), validation ,register);


// Login === sign-in

router.post("/login",
    loginValidation(), validation ,
    login)

// current == ME
router.get("/current", isAuth, (req, res) => {
    // Personne connecté
    if (!req.user) return res.status(401).json({ msg: "Not authenticated" });
    res.json({
        name: req.user.name,
        email: req.user.email,
        imageProfile:req.user.imageProfile
    });
});






module.exports = router;