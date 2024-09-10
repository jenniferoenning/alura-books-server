const { Router } = require("express") // Call Router responsible for calling the routes
const { getBooks, getBook, postBook, patchBook, deleteBook } = require("../controllers/book") // Call function controller getBooks

const router = Router() // Call Router

router.get('/', getBooks) // Call all Books

router.get('/:id', getBook) // Call all Books with ID === param send.

router.post('/', postBook)

router.patch('/:id', patchBook )

router.delete('/:id', deleteBook)

module.exports = router // Export