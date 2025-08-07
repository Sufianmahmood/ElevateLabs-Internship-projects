import express, { request, response } from 'express';


const app = express();

const port = 3000;

app.use(express.json());

let books = [
      { id: 1, title: "1984", author: "George Orwell" },
      { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien" },
]

app.get('/books', (req, res) => {
    res.status(200).json(books);
    });

app.post('/books', (req, res) => {
    const {title, author } = req.body;
    const newBook = {
        id: books.length + 1,
        title,
        author
    };
     books.push(newBook);
     res.status(201).json(newBook);

});

app.put('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const { title, author } = req.body;
  const book = books.find(b => b.id === bookId);

  if (!book) {
    return res.status(404).json({ msg: "Book not found" });
  }

  book.title = title || book.title;
  book.author = author || book.author;

  res.status(200).json(book);
});

// 8. DELETE a book by ID
app.delete('/books/:id', (req, res) => {
  const bookId = parseInt(req.params.id);
  const index = books.findIndex(b => b.id === bookId);

  if (index === -1) {
    return res.status(404).json({ msg: "Book not found" });
  }

  const deleted = books.splice(index, 1);
  res.status(200).json({ msg: "Book deleted", book: deleted[0] });
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

