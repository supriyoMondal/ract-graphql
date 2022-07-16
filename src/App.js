import { ApolloProvider } from "@apollo/client";
import React from "react";
import { client } from "./ApolloClient/client";
import { client as client2 } from "./ApolloClient/client2";
import GraphQL from "./components/GraphQL";

export var TOKEN =
  "eyJraWQiOiJFWHNhcDBySGlSQm1PUzd3cGtrSXV0SGNnWExpZWpOS0pMZ0x5SjZSQnhrPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206cGluY29kZSI6IjI5OTI5OSIsInN1YiI6IjFmM2M1NzNlLWU4NzEtNGFiNC05Y2Q0LTU4YmFiMThmZDE2NiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhZGRyZXNzIjp7ImZvcm1hdHRlZCI6Ikh5ZCJ9LCJjdXN0b206Y29nbml0b2lkZW50aXR5aWQiOiJhcC1zb3V0aC0xOmJjMjg1MzIyLTc0NmMtNDdmMS1iMzA5LTZhNjA4MjUxMmE3MSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfSkpvY09RSlVFIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFwcHRlc3RmaXJld2lyZXNAZ21haWwuY29tIiwiY3VzdG9tOnBhcnRuZXIiOiJGaXJld2lyZXMiLCJhdWQiOiI1YjE1YnM1MnBucWlkNGJ0ZGNvaXM0Nmc3IiwiZXZlbnRfaWQiOiJiZTQ3MGJhYi1lOTMwLTRkZDAtOTI1OS1lZjlmNjcyNTNkZjQiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1Nzk3MjQ1OCwibmFtZSI6IkFwcCBUZXN0IiwiY3VzdG9tOmF2YXRhckljb24iOiJZb3VuZ01hbjYiLCJwaG9uZV9udW1iZXIiOiIrOTE5ODg2ODMwNzc5IiwiY3VzdG9tOmlkZW50aXR5aWQiOiJhcC1zb3V0aC0xOmJjMjg1MzIyLTc0NmMtNDdmMS1iMzA5LTZhNjA4MjUxMmE3MSIsImV4cCI6MTY1Nzk3NjA1OCwiaWF0IjoxNjU3OTcyNDU4LCJlbWFpbCI6ImFwcHRlc3RmaXJld2lyZXNAZ21haWwuY29tIn0.gYt77ehZtYgEFB88WfQ6DN82kPDS0Q3R6anrHtDQQhITnMCGSTrDG-97DNZWzxMKAobAdwCjeI8egoD0Oe8SfoQIAn0Yww0wxPiCFbEA_6MQEDcqYbw9bu3PTIAJXGFqdw9ukNNDh8gs_yjePQF4EtDDiLBtCSTHUF7SinXNOr08ja3zI56JYZQeAaXbSq3DrX8YMhNkglZdPOOQfk_D-WcL-afoKl_j_ZLGrZS2tmDNCpYkx9ujJMqui1DLt0XVoaYm6s4LjC5d2Bbc2k_CW7XRltkuyDSq-JxU9LLvlit3XWOxDjODcrag1C9DY_-s85ccczjyg7AxR-uRDKrbFA";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GraphQL />
    </ApolloProvider>
  );
};

export default App;
