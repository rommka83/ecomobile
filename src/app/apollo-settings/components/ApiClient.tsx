import {
  ApolloClient,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { useConfig } from './client-configs/Configurator';
import { createContext, FC, useContext, useEffect, useState } from 'react';
import React from 'react';

export type ApiClient = ApolloClient<NormalizedCacheObject>;

const ApiContext = createContext<ApiClient | undefined>(undefined);

export function useApi(): ApiClient {
  const ctx = useContext(ApiContext);

  if (!ctx) {
    throw new Error('Illegal state: ApiContext must be defined.');
  }

  return ctx;
}

interface WithChildren {
  children: React.ReactNode;
}

export const Api: FC<WithChildren> = ({ children }) => {
  const [client, setClient] = useState<ApiClient>();
  const config = useConfig().api;

  useEffect(() => {
    setClient(
      new ApolloClient({
        uri: config.url + '/graphql',
        cache: new InMemoryCache(),
        headers: {
          'X-Auth-Client-Key': config.authKey,
        },
        defaultOptions: {
          watchQuery: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'ignore',
          },
          query: {
            fetchPolicy: 'no-cache',
            errorPolicy: 'all',
          },
        },
        credentials: 'include',
      }),
    );
  }, [config]);

  if (client === undefined) {
    return <></>;
  }

  return <ApiContext.Provider value={client}>{children}</ApiContext.Provider>;
};
