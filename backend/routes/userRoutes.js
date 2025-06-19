const express = require("express");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const {protect} = require("../middleware/authMiddleware");

const router = express.Router();

//@route post /api/users/register;
//@desc register a new user;
// access public
router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // registration logic
    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ message: "user already exists" });

    user = new User({ name, email, password });
    await user.save();

    //create jsaonwebtoken(JWT) payload
    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    //   sign and return token along with user
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;

        // send the user and token in response
        res.status(201).json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.send(500).send("Server Error");
  }
});

// @route post /api/users/login;
//@desc authenticate user
// access public

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    let user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isMatch = await user.matchPassword(password);

    if (!isMatch)
      return res.status(400).json({ message: "Invalid Credentials" });

    const payload = {
      user: {
        id: user._id,
        role: user.role,
      },
    };

    //   sign and return token along with user
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;

        // send the user and token in response
        res.json({
          user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
          },
          token,
        });
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

// @route get /api/users/profile;
//@desc get logged in user's profile (protected route)
// access private

router.get("/profile",protect, async (req, res) => {
  res.json(req.user);
});

module.exports = router;
