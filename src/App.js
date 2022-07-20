import { ApolloProvider } from "@apollo/client";
import React, { useState } from "react";
import GraphQL, { QUERY_URL, WSS_URL } from "./components/GraphQL";
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
import axios from "axios";

const App = () => {
  const [tokan, setTokan] = useState("");
  const [formData, setFormData] = useState({
    email: "apptestfirewires@gmail.com",
    password: "qwertyuiop",
  });
  const saveToken = async () => {
    try {
      const res = await axios.post(
        "https://dummy.firewires.net/api/users/login",
        formData
      );
      setTokan(res.data.token.id_token);
    } catch (error) {
      console.log(error.message);
    }
  };
  if (!tokan) {
    return (
      <div>
        <h1>email</h1>
        <input
          value={formData.email}
          onChange={({ target: { value } }) => {
            setFormData({
              ...formData,
              email: value,
            });
          }}
        />
        <h1>password</h1>
        <input
          value={formData.password}
          onChange={({ target: { value } }) => {
            setFormData({
              ...formData,
              password: value,
            });
          }}
        />
        <button
          style={{
            display: "block",
            padding: 16,
            marginTop: 16,
          }}
          onClick={saveToken}
        >
          Login
        </button>
      </div>
    );
  }

  const httpLink = new HttpLink({
    uri: QUERY_URL,
  });

  const wsLink = new GraphQLWsLink(
    createClient({
      url: WSS_URL,
      connectionParams: {
        headers: {
          authorization: `${tokan}`,
        },
      },
      onNonLazyError: (error) => {
        console.log({ error });
      },
    })
  );

  const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = tokan;
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

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(splitLink),
    headers: {
      Authorization: tokan,
    },
  });

  return (
    <ApolloProvider client={client}>
      <GraphQL token={tokan} email={formData.email} />
    </ApolloProvider>
  );
};

export default App;
