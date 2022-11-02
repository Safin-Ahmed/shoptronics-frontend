import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://rocky-inlet-99916.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  onError: ({ networkError, graphQLErrors }) => {
    console.log("graphQLErrors", graphQLErrors);
    console.log("networkError", networkError);
  },
});

export const filterObject = makeVar({});

export default client;
