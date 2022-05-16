import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { BookModule } from './books/books.module';

@Module({
  imports: [
    BookModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schemas.gql'),
      sortSchema: true,
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
