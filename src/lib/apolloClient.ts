import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_HYGRAPH_API_URL,
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_HYGRAPH_API_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
