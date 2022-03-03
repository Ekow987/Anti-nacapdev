import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from "native-base";

function Admin({ navigation }) {
  return (
    <View>
      <Text>{user.name} is Logged in</Text>
      <Text>Admin Page</Text>
      <Button
        size="sm"
        colorScheme="secondary"
        style={{ marginTop: 30, backgroundColor: "green", margin: 20 }}
        onPress={() => {
          navigation.navigate("Reported");
        }}
      >
        Case Reviewer
      </Button>
      <Button
        size="sm"
        colorScheme="secondary"
        style={{ marginTop: 30, backgroundColor: "green", margin: 20 }}
        onPress={() => {
          navigation.navigate("AdminPanel");
        }}
      >
        Admin Panel
      </Button>
      <Button
        size="sm"
        colorScheme="secondary"
        style={{ marginTop: 30, backgroundColor: "green", margin: 20 }}
        onPress={() => {
          navigation.navigate("Investigate");
        }}
      >
        Case Investigator
      </Button>
    </View>
  );
}

export default Admin;
