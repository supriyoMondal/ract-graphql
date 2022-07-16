import { gql, useMutation, useSubscription } from "@apollo/client";
import axios from "axios";
import React, { useEffect } from "react";
import { TOKEN } from "../App";

const TEST_SUBSCRIPTION = gql`
  subscription TestCreate {
    testCreate {
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

export const FourCHSwitchBoardUpdateOne = `mutation FourCHSwitchBoardUpdateOne($record: UpdateOnefourCHSwitchBoardInput!, $filter: FilterUpdateOnefourCHSwitchBoardInput) {
  fourCHSwitchBoardUpdateOne(record: $record, filter: $filter) {
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
  deviceFriendlyName: "4CH-47C",
  deviceName: "FW_58BF259A647C",
  roomName: "BedRoom_II",
  switch_1: "Fan 47",
  switch_1_Type: "FAN",
  switch_2: "Lamp 47",
  switch_2_Type: "Bulb",
  switch_3: "Bulb 47",
  switch_3_Type: "NightLamp",
  switch_4: "Socket 47",
  switch_4_Type: "FAN",
  owner: "apptestfirewires@gmail.com",
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

const requestWithGraphql = async (query, variables = {}) => {
  try {
    const data = await axios.post(
      QUERY_URL,
      { query, variables },
      {
        headers: {
          Authorization: TOKEN,
        },
      }
    );
    return data;
  } catch (error) {
    return error.response.data || error.message;
  }
};

const GraphQL = () => {
  const { data, loading } = useSubscription(TEST_SUBSCRIPTION);
  console.log({ data, loading });
  const hadleAddTodo = async () => {
    try {
      // const data = await requestWithGraphql(FourCHSwitchBoardUpdateOne, {
      //   filter: {
      //     deviceName: record1.deviceName,
      //   },
      //   record: {
      //     deviceName: "test",
      //     ...record1,
      //   },
      // });
      const data = await requestWithGraphql(ADD_TEST, {
        record: {
          name: "supriyo -1",
        },
      });
      console.log(data);
    } catch (error) {
      console.log("error ");
      console.log(error.response.data);
    }
  };

  const onload = async () => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onload();
  }, []);

  return (
    <div>
      <button onClick={() => hadleAddTodo()}>click me</button>
    </div>
  );
};

export default GraphQL;
