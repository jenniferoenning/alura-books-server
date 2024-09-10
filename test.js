const fs = require("fs") // Call Function "File System".

const currentData = JSON.parse(fs.readFileSync("books.json")) // Call file JSON books and read JSON with parse function. 
const newData = { id: '3', nome: 'Livro mais que demais!' } // Write a new data


// fs.writeFileSync("livros.json", JSON.stringify([...currentData, newData ])) // Read file JSON and write with new data.

console.log(JSON.parse(fs.readFileSync("books.json")))