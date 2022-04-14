import User from "../Models/user.js";
import { hashPassword, comparePassword, stripeApi } from "../Helpers/auth.js";
import jwt from "jsonwebtoken";
import { json } from "express";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!(name && email)) {
      return res.status(404).json({
        error: "All field is required {name, email, password}",
      });
    }

    if (!password || password.length < 6) {
      return res.status(404).json({
        error: "Password is required and should be 6 characters long",
      });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(404).json({
        error: "Email is taken",
      });
    }
    // hash password
    const hashedPassword = await hashPassword(password);

    // create account in stripe
    const customer = await stripeApi.customers.create({
      email,
    });
    // console.log("stripe customer created on signup", customer);
    try {
      const user = await new User({
        name,
        email,
        password: hashedPassword,
        stripe_customer_id: customer.id,
      }).save();

      // create signed token
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d",
      });

      // console.log(user);
      const { password, ...rest } = user._doc;
      return res.json({
        token,
        user: rest,
      });
    } catch (err) {
      return res.status(404).json({
        error: "Something went wrong",
      });
    }
  } catch (error) {
    return res.status(404).json({
      error: "Something went wrong",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.status(404).json({
        error: "Email is required ..",
      });
    }

    if (!password || password.length < 6) {
      return res.status(404).json({
        error: "Password is required and should be 6 characters long",
      });
    }
    // check email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        error: "No user found",
      });
    }
    // check password
    const match = await comparePassword(password, user.password);

    if (!match) {
      return res.status(404).json({
        error: "Wrong password",
      });
    }
    // create signed token
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.status(200).json({
      token,
      user: user._doc,
    });
  } catch (err) {
    return res.status(404).json({
      error: "Something went wrong...",
    });
  }
};

export const getMe = async (req, res) => {
  try {
    if (!req.user._id) return res.sendStatus(401);
    const user = await User.findById(req.user._id).select("-password");
    res.status(200).json(user);
  } catch (error) {
    res.status(401).json({ error: " Unauthorized To Acesss this " });
  }
};
