import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { TOKEN } from "../App";

const httpLink = new HttpLink({
  uri: "http://localhost:8005/graphql",
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:8005/graphql",
    connectionParams: {
      authToken: TOKEN,
    },
  })
);

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(splitLink),
  headers: {
    Authorization: TOKEN,
  },
});
