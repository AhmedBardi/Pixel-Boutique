const express = require("express")
const { addProduct, getAllProd, getOneProd, updateMyProd , getMyProd,deleteProd} = require("../controller/product.controller")
const isAuth=require("../middlewares/isAuth")

const router = express.Router()


// Add prod

router.post('/addProduct', isAuth, addProduct)

// get all des produits 
router.get('/allProd', getAllProd)
// get one 
router.get("/prod/:id", getOneProd)
// Update prod
router.put("/:id", isAuth, updateMyProd)
// get myProd 
router.get("/myProd", isAuth, getMyProd)
// Delete prod
router.delete("/:id", isAuth ,deleteProd)




module.exports=router


