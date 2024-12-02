const bookModel = require("./book.model");
const postBook = async (req, res) => {
  try {
    const newBook = await bookModel({ ...req.body });
    await newBook.save();
    res.status(200).send({ message: "Book posted succesfully", book: newBook });
  } catch (error) {
    console.error("Error creating book", error);
    res.status(500).send({ message: "Failed to create book" });
  }
};

// get all books

const getAllBooks = async (req, res) => {
  try {
    const books = await bookModel.find().sort({ createdAt: -1 });
    res.status(200).send(books);
  } catch (error) {
    console.error("Error fetching books", error);
    res.status(500).send({ message: "Failed to fetch books" });
  }
};

// get single book
const getSingleBook = async (req, res) => {
  try {
    const { id } = req.params;
    const books = await bookModel.findById(id);
    res.status(200).send(books);
  } catch (error) {
    console.error("Error finding book", error);
    res.status(500).send({ message: "book not found" });
  }
};

//update book
const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await bookModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateBook) {
      res.status(404).send({ message: "Book not found" });
    }
    res.status(200).send({
      message: "Book updated succesfully",
      book: updatedBook,
    });
  } catch (error) {
    console.error("Error updating book", error);
    res.status(500).send({ message: "failed to update book" });
  }
};

// delete book

const deleteOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await bookModel.findByIdAndDelete(id);
    res.status(200).send({
      message: "Book updated succesfully",
      book: deleteBook,
    });
  } catch (error) {
    console.error("Error deleting book", error);
    res.status(500).send({ message: "failed to delete book" });
  }
};

module.exports = {
  postBook,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteOneBook,
};
