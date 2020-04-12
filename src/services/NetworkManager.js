import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

import Queries from './network/Queries';
import Mutations from './network/Mutations';

const CachePolicies = {
  CACHE_FIRST: 'cache-first',
  CACHE_AND_NETWORK: 'cache-and-network',
  NETWORK_ONLY: 'network-only',
  CACHE_ONLY: 'cache-only',
  NO_CACHE: 'no-cache',
};

const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
  request: async operation => {
    // if (!JWT) {
    //   JWT = LocalStorage.getItem('JWT');
    // }

    // const token = `Bearer: ${JWT}`;

    operation.setContext({
      headers: {
        'apollographql-client-name': 'houseparty-web',
        'apollographql-client-version': '1.0.0',
        // authorization: token,
      },
    });
  },
});

const API = apolloClient;

export { API, Queries, Mutations };
