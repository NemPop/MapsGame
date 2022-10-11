import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../models/User.js";
import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";

export const signUpUser = asyncHandler(async (req, res) => {
  const {
    body: { name, email, password },
  } = req;

  const found = await User.findOne({ email });
  if (found) throw new ErrorResponse("Email already taken.");

  const hash = await bcrypt.hash(password, 5);

  const { _id } = await User.create({
    name,
    email,
    password: hash,
  });

  const token = jwt.sign({ _id }, process.env.SECRET);
  res.status(201).json({ token });
});

export const signInUser = asyncHandler(async (req, res) => {
  const {
    body: { email, password },
  } = req;

  const found = await User.findOne({ email });
  if (!found) throw new ErrorResponse("User does not exist");

  const match = await bcrypt.compare(password, found.password);
  if (!match) throw new ErrorResponse("Password is incorrect");

  const token = jwt.sign({ _id: found._id }, process.env.SECRET);
  res.status(201).json({ token });
});

export const googleSignIn = asyncHandler(async (req, res) => {
  const { email, name, token, googleId } = req.body;

  const oldUser = await User.findOne({ email });
  if (oldUser) {
    const result = { _id: oldUser._id.toString(), email, name };
    return res.status(200).json({ result, token });
  }

  const result = await User.create({
    email,
    name,
    googleId,
  });

  res.status(201).json({ result, token });
});
