import { makeSchema } from 'nexus'
import { join } from 'path'

export const schema = makeSchema({
//Our GraphQL schema will consist of many types that we will pass as an
//array to the types object.
  types: [],
  outputs: {
    //The first output file that Nexus will generate for you is a GraphQL schema file of type .graphql.
    //This is the GraphQL Schema Definition Language (SDL) for defining the structure of your API. 
    schema: join(process.cwd(), "schema.graphql"),
    // The second output file is a TypeScript file known as typegen, which will contain TypeScript 
    //type definitions for all types in your GraphQL schema. These generated types will help ensure typesafety in your application code and keep
    //our GraphQL schema definition in sync with your schema implementation. Again, more on this later.
    typegen: join(process.cwd(), "nexus-typegen.ts"), // 3
  },
});