import { gql, useMutation, useSubscription } from "@apollo/client";
import axios from "axios";
import React, { useEffect } from "react";
import { createClient } from "graphql-ws";

const TEST_SUBSCRIPTION = gql`
  subscription Subscription($email: String!) {
    onContactSensorUpdate(email: $email) {
      recordId
    }
  }
`;

const dev = true;

const URL = dev
  ? "localhost:8005/graphql"
  : "graphql-dev.firewires.net/graphql";

export const QUERY_URL = `http://${URL}`;
export const WSS_URL = `ws://${URL}`;

export const FourCHSwitchBoardUpdateOne = `mutation ContactSensorUpdateOne($record: UpdateOnecontactSensorInput!, $filter: FilterUpdateOnecontactSensorInput) {
  contactSensorUpdateOne(record: $record, filter: $filter) {
    recordId
  }
}`;

const ADD_TEST = `
  mutation TestCreate($record: CreateOnetestInput!) {
    testCreate(record: $record) {
      record {
        name
      }
    }
  }
`;

const record1 = {
  deviceName: "FW_58BF259A647C",
  deviceFriendlyName: "4CH-47C",
  roomName: "BedRoom_II",
  switch_1: "Fan 47",
  switch_1_Type: "FAN",
  switch_2: "Lamp 47",
  switch_2_Type: "Bulb",
  switch_3: "Bulb 47",
  switch_3_Type: "NightLamp",
  switch_4: "Socket 47",
  switch_4_Type: "FAN",
};

const rescord2 = {
  deviceFriendlyName: "4CH-AA0",
  deviceName: "FW_30AEA412EAA0",
  roomName: "BedRoom_I",
  switch_1: "Lamp4",
  switch_1_Type: "Bulb",
  switch_2: "Tube4",
  switch_2_Type: "Tube",
  switch_3: "Fridge4",
  switch_3_Type: "Fridge",
  switch_4: "Tv6",
  switch_4_Type: "Tv",
};

const record3 = {
  deviceName: "test1ss45",
  deviceFriendlyName: "1",
  category: "contactSensor",
  partner: "hello",
  owner: "apptestfirewires@gmail.com",
};

const GraphQL = ({ token, email }) => {
  // const subData = useSubscription(TEST_SUBSCRIPTION, {
  //   variables: { postId: 100 },
  // });
  const requestWithGraphql = async (query, variables = {}) => {
    try {
      const data = await axios.post(
        QUERY_URL,
        { query, variables },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      return data;
    } catch (error) {
      return error.response.data || error.message;
    }
  };
  const client = createClient({
    url: WSS_URL,
    connectionParams: {
      headers: {
        authorization: `${token}`,
      },
    },
  });
  const hadleAddTodo = async () => {
    try {
      const data = await requestWithGraphql(FourCHSwitchBoardUpdateOne, {
        filter: {
          deviceName: record3.deviceName,
        },
        record: {
          deviceFriendlyName: "test",
          ...record3,
        },
      });

      console.log(data);
    } catch (error) {
      console.log("error ");
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const unsubscribe = client.subscribe(
      {
        query: `subscription Subscription($email: String!) {
          onContactSensorUpdate(email: $email) {
            record {
              deviceName
              appStyle
              category
              partner
              roomName
              createdAt
              deviceType
              deviceFriendlyName
              owner
              members
              inventoryID
              updatedAt
              hubID
            }
          }
        }`,
        variables: { email },
      },
      {
        next: (data) => {
          console.log({ data });
        },
        error: () => {},
        complete: (all) => {
          console.log({ all });
          return () => {};
        },
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <button onClick={() => hadleAddTodo()}>click me</button>
    </div>
  );
};

export default GraphQL;
