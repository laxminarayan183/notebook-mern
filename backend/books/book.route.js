const express = require("express");
const {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteOneBook,
} = require("./book.controller");
const verifyAdminToken = require("../middleware/verifyAdminToken");

const router = express.Router();

router.get("/", getAllBooks);
router.post("/create-book", verifyAdminToken, postBook);
router.get("/:id", getSingleBook);
router.put("/edit/:id", verifyAdminToken, updateBook);
router.delete("/:id", verifyAdminToken, deleteOneBook);

module.exports = router;
