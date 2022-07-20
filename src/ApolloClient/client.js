import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";
import { setContext } from "@apollo/client/link/context";
import { TOKEN } from "../App";
import { QUERY_URL, WSS_URL } from "../components/GraphQL";

const httpLink = new HttpLink({
  uri: QUERY_URL,
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: WSS_URL,
    connectionParams: {
      headers: {
        authorization: `${TOKEN}`,
      },
    },
    onNonLazyError: (error) => {
      console.log({ error });
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
