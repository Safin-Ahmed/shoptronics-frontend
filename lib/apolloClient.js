import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "https://rocky-inlet-99916.herokuapp.com/graphql",
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

export default client;
