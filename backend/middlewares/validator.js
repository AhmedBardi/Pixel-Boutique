const {check, validationResult} = require("express-validator")


exports.registerValidation =()=>[
    check("name","Name is required").notEmpty(),
    check("email", "Enter a valide Email").isEmail(),
    check("password", "length must be between 5 and 15 car").isLength({min:5,max:15})
]

exports.loginValidation = ()=>[
    
    check("email", "Enter a valide Email").isEmail(),
    check("password", "length must be between 5 and 15 car").isLength({min:5,max:15})
]

exports.validation = (req,res,next)=>{
    const errors = validationResult(req)
    errors.isEmpty()? next() : res.status(400).json({errors:errors.array()})
}