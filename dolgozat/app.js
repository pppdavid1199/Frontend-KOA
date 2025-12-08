import express from "express";

const PORT = 3210;
const app = express();
app.use(express.json());

//GETALL
app.get("/book", (req, res) => {
    const books = db.GetAllBooks();
    res.json(books);
});

//GETBOOKBYID
app.get("/book/:id", (req, res) => {
    const id = req.params.id;
    const book = db.GetBooksById(id);
    res.json(book);
});

//POST
app.post("/book", (req, res) => {
    const { title, author, year } = req.body;
    db.AddBook(title, author, year);
    res.status(201);
});

//PUT
app.put("/book/:id", (req, res) => {
    const id = req.params.id;
    const { title, author, year } = req.body;
    db.UpdateBook(id, title, author, year);
    res.status(204);
});


app.listen(PORT, () => {
  console.log(`Szerver fut.`);
});
