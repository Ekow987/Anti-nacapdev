import React from "react";
import { View } from "react-native";
import "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { Image, Center, Button, Text } from "native-base";
import { useSelector } from "react-redux";
import { logout } from "../store/slices/auth.slice";

function Home({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.staff);

  return (
    <View>
      <Center>
        <Text fontSize="15" style={{ fontWeight: "bold", color: "green" }}>
          NATIONALANTI-CORRUPTION PLAN
        </Text>
        <Text fontSize="15" style={{ fontWeight: "bold", color: "green" }}>
          (NACAP)
        </Text>

        <Text fontSize="15" style={{ fontWeight: "bold", color: "green" }}>
          FORESTRY COMMISION PORTAL
        </Text>
        <Image
          source={require("../Assets/images/forest.jpg")}
          alt="you day shout too much"
          height={400}
          width={400}
          style={{ marginTop: 20 }}
        />
        <Button
          onPress={() => {
            navigation.navigate("Report");
          }}
          style={{ marginTop: -40, backgroundColor: "green" }}
        >
          Report A Case
        </Button>
      </Center>
      <Button
        style={{
          marginTop: 20,
          width: 300,
          height: 60,
          margin: 70,
          marginLeft: 30
        }}
        onLongPress={() => dispatch(logout())}
        onPress={() => {
          if (user) {
            switch (user.role) {
              case 1:
                navigation.replace("AdminPanel");
                break;
              case 2:
                navigation.replace("Reported");
                break;
              case 3:
                navigation.replace("Investigate");
                break;
              default:
                navigation.navigate("Login");
                break;
            }
          }
        }}
      >
        {user.role ? "Go To Panel" : "Admin Login"}
      </Button>
    </View>
  );
}

export default Home;
