const fs = require("fs")

function getAllBooks() { // Function only return all books file JSON
    return JSON.parse(fs.readFileSync("books.json"))
}

function getBookForId(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))

    const bookFiltered = books.filter( book => book.id === id)[0] // Filter all books with id === id param.
    // [0] call only first position. [{   -> id:2 <-  , nome: livro irado}].
    return bookFiltered
}

function insertBook(newBook) {
    const books = JSON.parse(fs.readFileSync("books.json")) // Get all books.
    const newListBooks = [ ...books, newBook ] // Insert a new book with "BODY".

    fs.writeFileSync("books.json", JSON.stringify(newListBooks)) // Return list with a new book.
}

function modifyBook(modifications, id) {
    let currentBooks = JSON.parse(fs.readFileSync("books.json")) // Get all books.
    const modifiedIndex = currentBooks.findIndex( book => book.id === id)
    const changedContent = { ...currentBooks[modifiedIndex], ...modifications }
    // livrosAtuais[indiceModificado] -> {id: "2", nome: "livro irado"}
    // modifications -> { nome: "nome mucho legal" }
    currentBooks[modifiedIndex] = changedContent
    fs.writeFileSync("books.json", JSON.stringify(currentBooks))
}

function trashBook(id) {
    const books = JSON.parse(fs.readFileSync("books.json"))
    const bookFilter = books.filter( book => book.id !== id) // Filter all books with Id !== Id Param. 
    fs.writeFileSync("books.json", JSON.stringify(bookFilter))
}
module.exports = {
    getAllBooks,
    getBookForId,
    insertBook,
    modifyBook,
    trashBook
}