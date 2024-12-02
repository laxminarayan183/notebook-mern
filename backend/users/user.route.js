const express = require("express");
const userModel = require("./user.model");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/admin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const admin = await userModel.findOne({ username });
    if (!admin) {
      res.status(404).send({ message: "Admin not found" });
    }
    if (admin.password !== password) {
      res.status(401).send({ message: "Invalid Password" });
    }
    const token = jwt.sign(
      {
        id: admin._id,
        username: admin.username,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    return res.status(200).json({
      message: "Authentication succesfull",
      token: token,
      user: { username: admin.username, role: admin.role },
    });
  } catch (error) {
    console.error("Failed to login as admin", error);
    res.status(401).send({ message: "Failed to login as admin" });
  }
});

module.exports = router;
