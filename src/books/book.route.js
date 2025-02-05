const express = require('express');
const Book = require('./book.model');
const { postABook, getAllBooks, getSingleBook, updateBook, deleteBook } = require('./book.controller');
const verifyAdminToken = require('../middleware/verifyAdminToken');
const router = express.Router();
// frontend > backend server > controller > bookschema > database > send to server > frontend
//post = submit something to database
//get = retrieve something from database
//put = update something in database
//patch = update something in database
//delete = delete something from database

//post book
router.post("/create-book", verifyAdminToken, postABook);

//get all books
router.get("/", getAllBooks);

//get single book
router.get("/:id", getSingleBook);

//update a book
router.put("/edit/:id", verifyAdminToken, updateBook)

//delete a book
router.delete("/:id", verifyAdminToken, deleteBook)

module.exports = router;