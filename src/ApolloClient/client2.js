// import { WebSocketLink } from "apollo-link-ws";
// import { getMainDefinition } from "apollo-utilities";
// import { SubscriptionClient } from "subscriptions-transport-ws";
// import {
//   ApolloClient,
//   ApolloLink,
//   createHttpLink,
//   InMemoryCache,
// } from "@apollo/client";
// import { TOKEN } from "../App";
// import { setContext } from "@apollo/client/link/context";
// import { QUERY_URL, WSS_URL } from "../components/GraphQL";

// const httpLink = createHttpLink({ uri: QUERY_URL });

// export const wsClient = new SubscriptionClient(WSS_URL, {
//   reconnect: true,
//   connectionParams: {
//     // Pass any arguments you want for initialization
//     headers: {
//       authorization: TOKEN,
//     },
//   },
// });

// const webSocketLink = new WebSocketLink(wsClient);

// const requestLink = ({ queryOrMutationLink, subscriptionLink }) =>
//   ApolloLink.split(
//     ({ query }) => {
//       const { kind, operation } = getMainDefinition(query);
//       return kind === "OperationDefinition" && operation === "subscription";
//     },
//     subscriptionLink,
//     queryOrMutationLink
//   );

// const link = ApolloLink.from([
//   requestLink({
//     queryOrMutationLink: httpLink,
//     subscriptionLink: webSocketLink,
//   }),
// ]);

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: TOKEN,
//     },
//   };
// });

// export const client = new ApolloClient({
//   cache: new InMemoryCache(),
//   link: authLink.concat(link),
//   headers: {
//     Authorization: TOKEN,
//   },
// });
