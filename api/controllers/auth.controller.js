import User from "../models/user.models.js";

export const register = async (req, res) => {
    try {
        const newUser = new User({
            username: "test",
            email: "test",
            password: "test",
            country: "test",
        });

        await newUser.save();
        res.status(201).send("User has been created");
    } catch (error) {
        res.status(500).send("Something went wrong");
    }
};

export const login = async (req, res) => {
    // Your login logic here
};

export const logout = async (req, res) => {
    // Your logout logic here
};
