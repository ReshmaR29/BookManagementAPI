import express from 'express';
import multer from 'multer';
import {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
} from '../controllers/bookController';
import { importBooks } from '../controllers/importController';

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', createBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.post('/books/import', upload.single('file'), importBooks);

export default router;
