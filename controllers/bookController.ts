import { Request, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import bookService from '../services/bookService';

export const getAllBooks = (req: Request, res: Response) => {
    const books = bookService.getAllBooks();
    res.status(200).json(books);
};

export const getBookById = (req: Request, res: Response) => {
    const book = bookService.getBookById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(book);
};

export const createBook = (req: Request, res: Response) => {
    const { title, author, publishedYear } = req.body;
    if (!title || !author || typeof publishedYear !== 'number') {
        return res.status(400).json({ message: 'Invalid data' });
    }
    const newBook = bookService.createBook({ id: uuidv4(), title, author, publishedYear });
    res.status(201).json(newBook);
};

export const updateBook = (req: Request, res: Response) => {
    const { title, author, publishedYear } = req.body;
    const updatedBook = bookService.updateBook(req.params.id, { title, author, publishedYear });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json(updatedBook);
};

export const deleteBook = (req: Request, res: Response) => {
    const success = bookService.deleteBook(req.params.id);
    if (!success) return res.status(404).json({ message: 'Book not found' });
    res.status(200).json({ message: 'Book deleted successfully' });
};
