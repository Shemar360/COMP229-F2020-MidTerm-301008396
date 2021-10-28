// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the book model
let book = require('../models/books');

/* GET books List page. READ */
router.get('/', (req, res, next) => {
  // find all books in the books collection
  book.find( (err, books) => {
    if (err) {
      return console.error(err);
    }
    else {
      res.render('books/index', {
        title: 'Books',
        books: books
      });
    }
  });

});

//  GET the Book Details page in order to add a new Book
router.get('/add', (req, res, next) => {

  router.get('/', bookController.displayBookList);

});

// POST process the Book Details page and create a new Book - CREATE
router.post('/add', (req, res, next) => {

  router.get('/add', bookController.displayAddPage);
  

});

// GET the Book Details page in order to edit an existing Book
router.get('/edit/:id', (req, res, next) => {

  router.get('/edit/:id', bookController.displayEditPage);
  

});

// POST - process the information passed from the details form and update the document
router.post('/:id', (req, res, next) => {

   router.post('/add', bookController.processAddPage);
   router.post('/:id', bookController.processEditPage);

});

// GET - process the delete by user id
router.get('/delete/:id', (req, res, next) => {
  router.get('/delete/:id', bookController.performDelete);
});


module.exports = router;
