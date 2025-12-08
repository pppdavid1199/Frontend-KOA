import Database from "better-sqlite3";

const db = new Database("./data/database.sqlite");

db.prepare("CREATE TABLE IF NOT EXISTS book (id INTEGER PRIMARY KEY AUTOINCREMENT, title STRING, author STRING, year INTEGER)").run();

//GETALL
export const GetAllBooks = () =>{
    db.prepare("SELECT * FROM book").all();
}

//POST
export const AddBook = (title, author, year) =>{
    db.prepare("INSERT INTO book (title, author, year) VALUES (?, ?, ?)").run(title, author, year);
}

//GETBYID
export const GetBooksById = (id) =>{
    db.prepare("SELECT * FROM book WHERE id = ?").get(id);
}

//PUT
export const UpdateBook = (id, title, author, year) =>{
    db.prepare("UPDATE book SET title = ?, author = ?, year = ? WHERE id = ?").run(title, author, year, id);
}