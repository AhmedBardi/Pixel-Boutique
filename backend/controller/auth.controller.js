const User = require('../model/User'); 
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
    try {
        const { name, email, password, imageProfile } = req.body; 
        
        // 1. Check if user already exists
        const foundUser = await User.findOne({ email: email });
        if (foundUser) {
            return res.status(400).json({ msg: "Email should be unique" });
        }
        
        // 2. Hash the password FIRST 
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // 3. Create and Save the new user first (so we get the actual DB _id)
        const newUser = new User({ 
            name, 
            email, 
            password: hashedPassword,
            imageProfile 
        });

        await newUser.save();

        // 4. Generate the token NOW that newUser is defined
        const token = jwt.sign(
            { id: newUser._id },
            process.env.SECRET_KEY, 
            { expiresIn: "2h" }
        );
        
        // Security Tip: Remove the password from the response object before sending it back
        const userResponse = newUser.toObject();
        delete userResponse.password;

        // 5. Send BOTH the user details and the token back to the client
        res.status(201).json({ 
            msg: "User created successfully!", 
            user: userResponse,
            token: token
        });

    } catch (error) {
        res.status(500).json({ msg: "Can not register", error: error.message });
    }
}

// Login
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Fixed the query typo here (changed 'name' to 'email')
        const foundUser = await User.findOne({ email: email });
        
        // 2. Added 'return' to stop execution if user is not found
        if (!foundUser) {
            return res.status(400).json({ msg: "Bad credentials!&" });
        }
        
        // 3. Added 'return' to stop execution if password doesn't match
        const checkpassword = await bcrypt.compare(password, foundUser.password);
        if (!checkpassword) {
            return res.status(401).json({ msg: "Bad credentials!ç" });
        }
        
        // 4. Generate token
        const token = jwt.sign(
            { id: foundUser._id },
            process.env.SECRET_KEY, 
            { expiresIn: "2h" }
        ); 

        // 5. Success response
        res.status(200).json({
            msg: "Login successfully!",
            user: {
                name: foundUser.name,
                email: foundUser.email,
                imageProfile: foundUser.imageProfile
            },
            token
        });

    } catch (error) {
        // 6. Added error handling inside the catch block
        res.status(500).json({ msg: "Can not login", error: error.message });
    }
}