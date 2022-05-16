import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field((type) => Int)
  Id: number;
  @Field()
  Title: string;
  @Field({ nullable: true, complexity: 20 })
  Author: string;
}
