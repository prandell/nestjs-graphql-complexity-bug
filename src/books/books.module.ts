import { Module } from '@nestjs/common';
import { BooksController } from './book.controller';
import { BookService } from './book.service';
import { ComplexityPlugin } from './complexity/complexity.graphql.plugin';
import { BookResolver } from './resolvers/book.resolver';

@Module({
  controllers: [BooksController],
  providers: [BookService, ComplexityPlugin, BookResolver],
})
export class BookModule {}
