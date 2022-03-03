import React from "react";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";


export default function CreateButton() {
    const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("Main");
  };
  return (
    <Button
      onPress={handlePress}
      mr={10}
      color={"red.700"}
      style={{
        backgroundColor: "green",
      }}
    >
      Create Report
    </Button>
  );
}