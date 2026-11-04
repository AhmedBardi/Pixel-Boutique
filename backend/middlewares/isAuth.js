const jwt = require("jsonwebtoken")
const User = require("../model/User")


const isAuth = async (req, res, next) => {
    try {
        // Récupere le token
        const authHeader = req.headers['authorization'] || req.headers['Authorization'];
        if (!authHeader) {
            return res.status(401).json({ msg: "No token provided" });
        }
        const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
        // Si c'est le bon token
        const decode = jwt.verify(token, process.env.SECRET_KEY);

        // User correspond
        const foundUser = await User.findById(decode.id);
        if (!foundUser) return res.status(404).json({ msg: "User not found" });
        // response
        req.user = foundUser;
        next();
    } catch (error) {
        console.error('isAuth error:', error);
        return res.status(401).json({ msg: "Invalid token" });
    }
}

module.exports = isAuth