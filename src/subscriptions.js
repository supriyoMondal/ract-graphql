const OnContactSensorUpdate = `subscription OnContactSensorUpdate($email: String!) {
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
}`;

const OnContactSensorDelete = `subscription OnContactSensorDelete($email: String!) {
  onContactSensorDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
// ** Hub id removed because throwing A ERROR
const OnSmartBulbUpdate = `subscription OnSmartBulbUpdate($email: String!) {
  onSmartBulbUpdate(email: $email) {
    record {
      deviceName
      appStyle
      category
      createdAt
      deviceFriendlyName
      deviceType
      members
      owner
      inventoryID
      partner
      updatedAt
    }
  }
}`;
const OnSmartBulbDelete = `subscription OnSmartBulbDelete($email: String!) {
  onSmartBulbDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;

// ** Hub id removed because throwing A ERROR
const OnSosButtonUpdate = `subscription OnSosButtonUpdate($email: String!) {
  onSosButtonUpdate(email: $email) {
    record {
      deviceName
      appStyle
      capabilities
      category
      createdAt
      deviceFriendlyName
      deviceType
      members
      owner
      inventoryID
      partner
      updatedAt
      
    }
  }
}`;
const OnSosButtonDelete = `subscription OnSosButtonDelete($email: String!) {
  onSosButtonDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnDoorSensorUpdate = `subscription OnDoorSensorUpdate($email: String!) {
  onDoorSensorUpdate(email: $email) {
    record {
      deviceName
      appStyle
      roomName
      deviceType
      deviceFriendlyName
      userDevices
      hub
      owner
      members
      inventoryID
    }
  }
}`;
const OnDoorSensorDelete = `subscription OnDoorSensorDelete($email: String!) {
  onDoorSensorDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnEightCHUpdate = `subscription OnEightCHUpdate($email: String!) {
  onEightCHUpdate(email: $email) {
    record {
      deviceName
      roomName
      appStyle
      deviceType
      deviceFriendlyName
      switch_1
      switch_1_Type
      switch_2
      switch_2_Type
      switch_3
      switch_3_Type
      switch_4
      switch_4_Type
      switch_5
      switch_5_Type
      switch_6
      switch_6_Type
      switch_7
      switch_7_Type
      switch_8
      switch_8_Type
      owner
      members
      inventoryID
      createdAt
      updatedAt
      hubID
    }
  }
}`;
const OnEightCHDelete = `subscription OnEightCHDelete($email: String!) {
  onEightCHDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnEnvMonitorUpdate = `subscription OnEnvMonitorUpdate($email: String!) {
  onEnvMonitorUpdate(email: $email) {
    record {
      deviceName
      appStyle
      roomName
      deviceType
      deviceFriendlyName
      owner
      members
      inventoryID
    }
  }
}`;
const OnEnvMonitorDelete = `subscription OnEnvMonitorDelete($email: String!) {
  onEnvMonitorDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnFireSensorUpdate = `subscription OnFireSensorUpdate($email: String!) {
  onFireSensorUpdate(email: $email) {
    record {
      deviceName
      roomName
      deviceFriendlyName
      owner
      members
      createdAt
      updatedAt
    }
  }
}`;
const OnFireSensorDelete = `subscription OnFireSensorDelete($email: String!) {
  onFireSensorDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnFlowMeterUpdate = `subscription OnFlowMeterUpdate($email: String!) {
  onFlowMeterUpdate(email: $email) {
    record {
      deviceName
      appStyle
      roomName
      deviceType
      deviceFriendlyName
      owner
      members
      inventoryID
      category
      createdAt
      partner
      updatedAt
    }
  }
}`;
const OnFlowMeterDelete = `subscription OnFlowMeterDelete($email: String!) {
  onFlowMeterDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnFourCHW1FSwitchBoardUpdate = `subscription OnFourCHW1FSwitchBoardUpdate($email: String!) {
  onFourCHW1FSwitchBoardUpdate(email: $email) {
    record {
      deviceName
      appStyle
      roomName
      deviceType
      deviceFriendlyName
      switch_1
      switch_1_Type
      switch_2
      switch_2_Type
      switch_3
      switch_3_Type
      switch_4
      switch_4_Type
      fan_1
      fan_1_Type
      owner
      members
      inventoryID
      createdAt
      updatedAt
      category
      partner
      hubID
    }
  }
}`;
const OnFourCHW1FSwitchBoardDelete = `subscription OnFourCHW1FSwitchBoardDelete($email: String!) {
  onFourCHW1FSwitchBoardDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnFourCHSwitchUpdate = `subscription OnFourCHSwitchUpdate($email: String!) {
  onFourCHSwitchUpdate(email: $email) {
    record {
      deviceName
      appStyle
      roomName
      deviceType
      deviceFriendlyName
      switch_1
      switch_1_Type
      switch_2
      switch_2_Type
      switch_3
      switch_3_Type
      switch_4
      switch_4_Type
      partner
      owner
      members
      inventoryID
      capabilities
      createdAt
      updatedAt
      hubID
    }
  }
}`;
const OnFourCHSwitchDelete = `subscription OnFourCHSwitchDelete($email: String!) {
  onFourCHSwitchDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnGasSensorUpdate = `subscription OnGasSensorUpdate($email: String!) {
  onGasSensorUpdate(email: $email) {
    record {
      deviceName
      appStyle
      roomName
      deviceType
      deviceFriendlyName
      hub
      owner
      members
      inventoryID
      capabilities
      category
      createdAt
      updatedAt
    }
  }
}`;
const OnGasSensorDelete = `subscription OnGasSensorDelete($email: String!) {
  onGasSensorDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnHubUpdate = `subscription OnHubUpdate($email: String!) {
  onHubUpdate(email: $email) {
    record {
      deviceName
      roomName
      appStyle
      deviceType
      deviceFriendlyName
      partner
      owner
      members
      inventoryID
      capabilities
      category
      createdAt
      updatedAt
    }
  }
}`;
const OnHubDelete = `subscription OnHubDelete($email: String!) {
  onHubDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnIrdbUpdate = `subscription OnIrdbUpdate($email: String!) {
  onIrdbUpdate(email: $email) {
    record {
      vendor
      model
      protocol
      bits
      applianceType
      applianceCodes
    }
  }
}`;
const OnIrdbDelete = `subscription OnIrdbDelete($email: String!) {
  onIrdbDelete(email: $email) {
    record {
      vendor
      model
      protocol
      bits
      applianceType
      applianceCodes
    }
  }
}`;
const OnSixCHWFSwitchBoardUpdate = `subscription OnSixCHWFSwitchBoardUpdate($email: String!) {
  onSixCHWFSwitchBoardUpdate(email: $email) {
    record {
      deviceName
      roomName
      appStyle
      deviceType
      deviceFriendlyName
      switch_1
      switch_1_Type
      switch_2
      switch_2_Type
      switch_3
      switch_3_Type
      switch_4
      switch_4_Type
      switch_5
      switch_5_Type
      fan_1
      fan_1_Type
      owner
      members
      inventoryID
      createdAt
      updatedAt
      partner
      hubID
    }
  }
}`;
const OnSixCHWFSwitchBoardDelete = `subscription OnSixCHWFSwitchBoardDelete($email: String!) {
  onSixCHWFSwitchBoardDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnUniversalRemoteUpdate = `subscription OnUniversalRemoteUpdate($email: String!) {
  onUniversalRemoteUpdate(email: $email) {
    record {
      deviceName
      appStyle
      category
      createdAt
      deviceFriendlyName
      deviceType
      members
      owner
      remotes
      roomName
      inventoryID
      partner
      updatedAt
    }
  }
}`;
const OnUniversalRemoteDelete = `subscription OnUniversalRemoteDelete($email: String!) {
  onUniversalRemoteDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;
const OnSixCHSwitchBoardUpdate = `subscription OnSixCHSwitchBoardUpdate($email: String!) {
  onSixCHSwitchBoardUpdate(email: $email) {
    record {
      deviceName
      roomName
      appStyle
      deviceType
      deviceFriendlyName
      switch_1
      switch_1_Type
      switch_2
      switch_2_Type
      switch_3
      switch_3_Type
      switch_4
      switch_4_Type
      switch_5
      switch_5_Type
      switch_6
      switch_6_Type
      owner
      members
      inventoryID
      createdAt
      updatedAt
      partner
      hubID
    }
  }
}`;
const OnSixCHSwitchBoardDelete = `subscription OnSixCHSwitchBoardDelete($email: String!) {
  onSixCHSwitchBoardDelete(email: $email) {
    record {
      deviceName
    }
  }
}`;

export const SubscriptionsArray = [
  OnContactSensorUpdate,
  OnContactSensorDelete,
  OnSmartBulbUpdate,
  OnSmartBulbDelete,
  OnSosButtonUpdate,
  OnSosButtonDelete,
  OnDoorSensorUpdate,
  OnDoorSensorDelete,
  OnEightCHUpdate,
  OnEightCHDelete,
  OnEnvMonitorUpdate,
  OnEnvMonitorDelete,
  OnFireSensorUpdate,
  OnFireSensorDelete,
  OnFlowMeterUpdate,
  OnFlowMeterDelete,
  OnFourCHW1FSwitchBoardUpdate,
  OnFourCHW1FSwitchBoardDelete,
  OnFourCHSwitchDelete,
  OnFourCHSwitchUpdate,
  OnGasSensorDelete,
  OnGasSensorUpdate,
  OnHubUpdate,
  OnHubDelete,
  OnIrdbDelete,
  OnIrdbUpdate,
  OnSixCHWFSwitchBoardDelete,
  OnSixCHSwitchBoardUpdate,
  OnSixCHSwitchBoardDelete,
  OnSixCHWFSwitchBoardUpdate,
  OnUniversalRemoteDelete,
  OnUniversalRemoteUpdate,
];
