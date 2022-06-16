import { gql, useMutation, useSubscription } from "@apollo/client";
import React from "react";

const TOKEN =
  "eyJraWQiOiJFWHNhcDBySGlSQm1PUzd3cGtrSXV0SGNnWExpZWpOS0pMZ0x5SjZSQnhrPSIsImFsZyI6IlJTMjU2In0.eyJjdXN0b206cGluY29kZSI6IjI5OTI5OSIsInN1YiI6IjFmM2M1NzNlLWU4NzEtNGFiNC05Y2Q0LTU4YmFiMThmZDE2NiIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhZGRyZXNzIjp7ImZvcm1hdHRlZCI6Ikh5ZCJ9LCJjdXN0b206Y29nbml0b2lkZW50aXR5aWQiOiJhcC1zb3V0aC0xOmJjMjg1MzIyLTc0NmMtNDdmMS1iMzA5LTZhNjA4MjUxMmE3MSIsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC5hcC1zb3V0aC0xLmFtYXpvbmF3cy5jb21cL2FwLXNvdXRoLTFfSkpvY09RSlVFIiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6ImFwcHRlc3RmaXJld2lyZXNAZ21haWwuY29tIiwiY3VzdG9tOnBhcnRuZXIiOiJGaXJld2lyZXMiLCJhdWQiOiI1YjE1YnM1MnBucWlkNGJ0ZGNvaXM0Nmc3IiwiZXZlbnRfaWQiOiI5NjllNGM2OS1kNDkyLTRkNjgtOGRmNC0zNzBhMmQ5NGM1OTYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTY1NDYwNzQ2OCwibmFtZSI6IkFwcCBUZXN0IiwiY3VzdG9tOmF2YXRhckljb24iOiJZb3VuZ01hbjYiLCJwaG9uZV9udW1iZXIiOiIrOTE5ODg2ODMwNzc5IiwiY3VzdG9tOmlkZW50aXR5aWQiOiJhcC1zb3V0aC0xOmJjMjg1MzIyLTc0NmMtNDdmMS1iMzA5LTZhNjA4MjUxMmE3MSIsImV4cCI6MTY1NDYxMTA3NiwiaWF0IjoxNjU0NjA3NDc2LCJlbWFpbCI6ImFwcHRlc3RmaXJld2lyZXNAZ21haWwuY29tIn0.cF7hRFOKfuHXibk6CKh_IM2uX2-1_gsq29mvFzoo56ZK4U4osGjG_D8iyRHI7d7x30oP1ONH19nscCmqcaJjJePLDaljQmN-iZRcgaNDCBCb7wL63lTXrXSKKW0xqq-TJwAQWtBoj1POofi6KdDGoHJIF2J6o604LAJ3hIg4ZJs-O1eH4faAB8_QT3vUcp10yn6DgIfKZTAksLydrQb6QlkNKbUzW8VJOU4kFVL3ZXaEiZJ_i0_oJPgcQ6ioPyEIjaNF1yOFrfLx-6DaQO_LpQqcHTOW6_tY5Nrj3fefwwVAcl1q5BaqruHzkw017CdYGu8zfoSEJK__zwpc3qtfzA";

const ADD_TEST = gql`
  mutation TestCreate($record: CreateOnetestInput!) {
    testCreate(record: $record) {
      record {
        name
      }
    }
  }
`;

const TEST_SUBSCRIPTION = gql`
  subscription TestCreate {
    testCreate {
      recordId
    }
  }
`;

const GraphQL = () => {
  const [addTodo, { data, loading, error }] = useMutation(ADD_TEST);
  const { data: subData, loading: subLoading } =
    useSubscription(TEST_SUBSCRIPTION);

  const hadleAddTodo = () => {
    try {
      addTodo({
        variables: {
          record: {
            name: "supriyo -1",
          },
        },
      });
    } catch (error) {
      console.log("error ");
      console.log(error.response.data);
    }
  };
  console.log({ data, subData });
  return (
    <div>
      <button onClick={() => hadleAddTodo()}>click me</button>
    </div>
  );
};

export default GraphQL;
