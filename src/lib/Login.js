import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  HStack,
  Image,
  WarningOutlineIcon
} from "native-base";
import { View } from "react-native";
import { login } from "../store/slices/auth.slice";
import Axios from "axios";
// import { baseURL } from "./Api";

// import { StackActions } from "@react-navigation/native";

export function Login({ navigation }) {
  const [staff, setStaff] = useState({ staffId: "", password: "" });
  const [loginError, setLoginError] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      setLoginError(false);
      let res = await Axios({
        method: "POST",
        url:"http://10.5.17.18:80/api/v1/users/auth",
        // url: `${baseURL}/users/auth`,
        data: staff
      });

      const { message, data } = res.data;

      if (message === "User does not exist") {
        console.log("User does not exist");
        setLoginError(true);
        return;
      }

      if (data) {
        dispatch(login(data));

        switch (data.role) {
          case 1:
            navigation.replace("AdminPanel");
            break;
          case 2:
            navigation.replace("Reported");
            break;
          case 3:
            navigation.replace("Investigate");
          default:
            break;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Box
        safeArea
        p="2"
        py="8"
        w="90%"
        maxW="290"
        style={{ marginLeft: 50, marginTop: 60 }}
      >
        <Image
          style={{ marginLeft: 30, width: 200 }}
          source={require("../Assets/images/logo.png")}
          alt="logo"
          height={100}
          width={100}
        />

        <VStack space={3} mt="5">
          <FormControl isInvalid={loginError}>
            <FormControl.Label>Staff ID</FormControl.Label>
            <Input
              value={staff.staffId}
              onChangeText={(val) =>
                setStaff((prev) => ({ ...prev, staffId: val }))
              }
            />
          </FormControl>
          <FormControl isInvalid={loginError}>
            <FormControl.Label>Password</FormControl.Label>
            <Input
              type="password"
              value={staff.password}
              onChangeText={(val) =>
                setStaff((prev) => ({ ...prev, password: val }))
              }
            />
            <FormControl.ErrorMessage
              leftIcon={<WarningOutlineIcon size="xs" />}
            >
              Staff ID or Password is not correct
            </FormControl.ErrorMessage>
          </FormControl>
          <Button
            mt="2"
            colorScheme="indigo"
            onPress={handleLogin}
            style={{ backgroundColor: "green" }}
          >
            Login
          </Button>
          <HStack mt="6" justifyContent="center"></HStack>
        </VStack>
      </Box>
    </View>
  );
}

export default Login;
