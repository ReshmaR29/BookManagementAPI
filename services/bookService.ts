import { Book } from '../models/bookModel';

let books: Book[] = [];

const getAllBooks = () => books;

const getBookById = (id: string) => books.find(book => book.id === id);

const createBook = (book: Book) => {
    books.push(book);
    return book;
};

const updateBook = (id: string, updatedFields: Partial<Book>) => {
    const book = books.find(book => book.id === id);
    if (!book) return null;
    Object.assign(book, updatedFields);
    return book;
};

const deleteBook = (id: string) => {
    const index = books.findIndex(book => book.id === id);
    if (index === -1) return false;
    books.splice(index, 1);
    return true;
};

export default {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};
