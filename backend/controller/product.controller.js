const Product = require("../model/Product")

// Add product 
exports.addProduct = async(req,res)=>{
    try {
        // Construction du document Produit 
        const newProd = new Product({...req.body, createdBy : req.user._id})
        // Sauvgarde dans la base des données 
        await newProd.save()
        res.status(201).json({msg:"Product created successfully", newProd})
    } catch (error) {
        res.status(500).json({msg:"Fail to add this product",error})
    }
}
// --------------------------------------------------------------------------------------
// getAll
exports.getAllProd = async(req,res)=>{
    try {
    // Voir tous les produits 
    const listProds= await Product.find()
    res.status(200).json({msg:"Products:", listProds})
    } catch (error) {
        res.status(500).json({msg:"Fail to get Products",error})
    }
}
// -------------------------------------------------------------------------------------
// getOne
exports.getOneProd = async(req,res)=>{
    try {
        const {id}= req.params
        const prodToGet = await Product.findById(id)
        if(!prodToGet) return res.status(404).json({msg:"Product not found"})
        res.status(200).json({msg:"The product is:", prodToGet})
    } catch (error) {
        res.status(500).json({msg:"Fail to get this prod",error})
    }
}
// --------------------------------------------------------------------------------------
// Get my Prod
exports.getMyProd = async (req,res)=>{
    try {
        const myListProd = await Product.find({createdBy:req.user._id})
        res.status(200).json({msg:"Your product is", myListProd})
    } catch (error) {
         res.status(500).json({msg:"Fail to get your prod",error})
    }
}
// ------------------------------------------------------------------------------
// Update my product
exports.updateMyProd =  async (req,res)=>{
    try {
        // Récupérer l'id à partir de la requête 
        const {id}=req.params
        // Chercher les produits dans ma collection 
        const foundProd=await Product.findById(id) 
        if(!foundProd) return res.status(404).json({msg:"Product not found"})
        if(foundProd.createdBy.toString() !== req.user._id.toString()) 
            return res.status(403).json({msg:"You can't update this prod"})
        // Mise à jour 
        const prodToUpdate = await Product.findByIdAndUpdate(id, {...req.body},{new:true})
        res.status(200).json({msg:"Updated ", prodToUpdate })
    } catch (error) {
         res.status(500).json({msg:"Fail to update your prod",error})
    }
}

// ------------------------------------------------------------------------------
// Delete 
exports.deleteProd = async (req, res) => {
  try {
    const { id } = req.params;
    const prodToFind = await Product.findById(id);
    if (!prodToFind) {
      return res.status(404).json({ msg: "Le produit n'existe pas " });
    }
    if (prodToFind.createdBy.toString() !== req.user._id.toString()) {
      return res
        .status(403)
        .json({ msg: "Tu n'as pas le droit de supprimer ce produit!" });
    }
    await Product.findByIdAndDelete(id);
    res.status(200).json({ msg: "Produit supprimé!", prodToFind });
  } catch (error) {
    res.status(500).json({ msg: "Impossible de supprimer ce produit ", error });
  }
};

