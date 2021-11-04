import * as React from 'react';

import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './src/config/apollo';
import { Routes } from './src/routes';

export default function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <Routes />
    </ApolloProvider>
  );
}
