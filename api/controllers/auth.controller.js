import User from "../models/user.models.js"; // Ensure the import matches the correct filename

export const register = async (req, res) => {
    try {
        const { username, email, password, country, phone, desc } = req.body; // Destructure fields from the request body

        const newUser = new User({
            username,
            email,
            password,
            country,
            phone,
            desc,
        });

        await newUser.save();
        res.status(201).send("User has been created");
    } catch (error) {
        console.error("Registration error:", error); // Log the error for debugging
        res.status(500).send("Something went wrong");
    }
};

export const login = async (req, res) => {
    // Your login logic here
};

export const logout = async (req, res) => {
    // Your logout logic here
};
