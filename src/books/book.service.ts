import { Injectable } from '@nestjs/common';
import { Book } from '../models/book.model';

const BOOKS = [{ Id: 1, Title: 'Shrek', Author: 'John Cena' }];

@Injectable()
export class BookService {
  getBookById(id: number): Book {
    const book = BOOKS.find((b) => b.Id === id);
    if (book) {
      const result = new Book();
      result.Author = book.Author;
      result.Id = book.Id;
      result.Title = book.Title;
      return result;
    }
  }
}
