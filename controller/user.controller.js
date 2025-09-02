import { User } from "../models/userModel.js";

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email, password });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "No Such User is found",
      });
    }
    return res.status(200).send({
        success: true,
        message: "User login successfully",
        user
      });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: "error in login controller",
      error,
    });
  }
};
const registerController = async(req,res) => {
    try {
        const {name,email,password}=req.body;
        const newUser=await User.create({
      username,
      email,
      password,
    });
     return res.status(201).send({
        success: true,
        message: "user register succefully",
        newUser
      });

    } catch (error) {
        res.status(400).json({
      success: false,
      message: "error in register controller",
      error,
    });
    }
};
export { loginController, registerController };
