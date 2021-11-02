import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const typeDefs = gql`
  type Query {
    page: Int!
  }
`;

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: false,
          read(existing) {
            return existing;
          },
          merge(existing = [], incoming) {
            return [...existing, ...incoming.results];
          },
        },
      },
    },
  },
});

export const apolloClient = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: cache,
  typeDefs,
});
