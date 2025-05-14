import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import bookService from '../services/bookService';

export const importBooks = (req: Request, res: Response) => {
    if (!req.file) return res.status(400).json({ message: 'No file uploaded' });

    const filePath = path.join(__dirname, '..', 'uploads', req.file.filename);
    const data = fs.readFileSync(filePath, 'utf8').split('\n');

    let addedBooksCount = 0;
    const errorRows: string[] = [];

    data.forEach((row, index) => {
        const [title, author, yearStr] = row.split(',');
        const publishedYear = Number(yearStr);

        if (!title || !author || isNaN(publishedYear)) {
            errorRows.push(`Row ${index + 1}: Invalid data`);
        } else {
            bookService.createBook({ id: uuidv4(), title: title.trim(), author: author.trim(), publishedYear });
            addedBooksCount++;
        }
    });

    res.status(200).json({ addedBooksCount, errorRows });
};
