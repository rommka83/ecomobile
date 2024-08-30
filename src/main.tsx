import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/route/route.tsx';
import './index.css';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-lk2.ekomobile.ru',
  cache: new InMemoryCache(),
  headers: {
    'X-Auth-Client-Key': 'JmPAwjXYY3ufKAC7TFDJXZFhcsXZkqVN',
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
);
