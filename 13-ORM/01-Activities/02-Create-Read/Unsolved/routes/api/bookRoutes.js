const router = require('express').Router();
const Book = require('../../models/Book');

// TODO: Add a comment describing the purpose of this route
// GET /api/books/, returns all book records 
router.get('/', (req, res) => {
  // TODO: Add a comment describing the functionality of this method
  // taking the Book model, running a findAll() and then taking the response and returning this as json
  // the findAll() function is a method which returns a promise
  // SQL equivalent SELECT * FROM book;
  Book.findAll().then((bookData) => {
    res.json(bookData);
  });
});

// TODO: Add a comment describing the purpose of this route
// GET /api/books/paperbacks, return all records from book table which are paperback
router.get('/paperbacks', (req, res) => {
  Book.findAll({
    // Order all records found by title
    // SQL equivalent: ORDER BY title;
    order: ['title'],
    // Filter book records by is_paperback being true (books that are paperback)
    // SQL equivalent: WHERE is_paperback = TRUE
    where: {
      is_paperback: true
    },
    attributes: {
      // Do not return columns 'is_paperback' and 'edition' with book records
      exclude: ['is_paperback', 'edition']
    }
  }).then((bookData) => {
    res.json(bookData);
  });
});

// GET /api/books/:id <- the book id, GET a book record by its ID
router.get('/:id', (req, res) => {
  // findbyPk finds a single instance by the primary key, returns a single object and not an array
  Book.findByPk(req.params.id).then((bookData) => {
    // Returns a book record which has the ID passed in the URL
    // SQL Equivalent: SELECT * WHERE ? = book_id; [req.params.id]
    res.json(bookData);
  });
});

// CREATE a book
router.post('/', (req, res) => {
  Book.create(req.body)
    .then((newBook) => {
      res.json(newBook);
    })
    .catch((err) => {
      res.json(err);
    });
});

// CREATE multiple books
router.post('/seed', (req, res) => {
  Book.bulkCreate([
    {
      title: 'Make It Stick: The Science of Successful Learning',
      author: 'Peter Brown',
      isbn: '978-0674729018',
      pages: 336,
      edition: 1,
      is_paperback: false
    },
    {
      title: 'Essential Scrum: A Practical Guide to the Most Popular Agile Process',
      author: 'Kenneth Rubin',
      isbn: '978-0137043293',
      pages: 500,
      edition: 1,
      is_paperback: true
    },
    {
      title: "White Fragility: Why It's So Hard for White People to Talk About Racism",
      author: 'Robin DiAngelo',
      isbn: '978-0807047415',
      pages: 192,
      edition: 2,
      is_paperback: true
    },
    {
      title: 'The Pragmatic Programmer: Your Journey To Mastery',
      author: 'David Thomas',
      isbn: '978-0135957059',
      pages: 352,
      edition: 2,
      is_paperback: false
    },
    {
      title: 'The Art of Computer Programming, Vol. 1: Fundamental Algorithms',
      author: 'Donald Knuth',
      isbn: '978-0201896831',
      pages: 672,
      edition: 3,
      is_paperback: false
    },
    {
      title: 'Algorithms of Oppression: How Search Engines Reinforce Racism',
      author: 'Safiya Umoja Noble',
      isbn: '978-1479837243',
      pages: 256,
      edition: 1,
      is_paperback: true
    }
  ])
    .then(() => {
      res.send('Database seeded!');
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
