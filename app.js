const express = require("express") // import function express
const routeBook = require("./routes/book") // Import route book

const app = express() // call function express.
app.use(express.json()) // Application accepted JSON.

app.use("/books", routeBook) // Use route books

const port = 8000 //define port

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})