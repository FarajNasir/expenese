import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";

const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(500).send({
        success: false,
        message: "Please provide all required fields",
      });
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return res.status(400).send({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(201).send({
      success: true,
      message: "user register succefully",
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error in register controller",
      error: error.message || error, 
    });
  }
};

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(401).send({
        success: false,
        message: "Please provide email and password",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "No Such User is found",
        
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({
        success: false,
        message: "invallid password or email",
      });
    }
    return res.status(200).send({
      success: true,
      message: "User login successfully",
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error in login controller",
      error:error.message
    });
  }
};

export { loginController, registerController };
