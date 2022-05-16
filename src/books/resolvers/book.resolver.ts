import {
  Resolver,
  Args,
  Query,
  ComplexityEstimatorArgs,
} from '@nestjs/graphql';
import { Book } from 'src/models/book.model';
import { BookService } from '../book.service';

@Resolver((of) => Book)
export class BookResolver {
  constructor(private appService: BookService) {}

  //QUERY
  @Query((returns) => Book, {
    name: 'book',
    description: 'book object',
  })
  getBookById(@Args('Id') id: number) {
    return this.appService.getBookById(id);
  }
}
