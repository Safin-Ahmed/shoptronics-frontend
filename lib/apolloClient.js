import store from '../store';
import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";
const URL = 'https://rocky-inlet-99916.herokuapp.com/graphql'

// const client = new ApolloClient({
//   uri: "https://rocky-inlet-99916.herokuapp.com/graphql",
//   // uri: "http://localhost:1337/graphql",
//   cache: new InMemoryCache(),
// });




const httpLink = new HttpLink({ uri: URL });

const authLink = new ApolloLink((operation, forward) => {
  // Retrieve the authorization token from storage.
  const token = store.getState().auth.token
  console.log('token', token);

  // Use the setContext method to set the HTTP headers.
  operation.setContext({
    headers: {
      authorization: token ? `Bearer ${token}` : ''
    }
  });

  // Call the next link in the middleware chain.
  return forward(operation);
});


const client = new ApolloClient({
  link: authLink.concat(httpLink), // Chain it with the HttpLink
  cache: new InMemoryCache()
});


export default client;
