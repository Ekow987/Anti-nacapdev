import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Home/Home";
import Report from "../Screen/report";
import Login from "../lib/Login";
import Admin from "../Screen/Admin";
import Main from "../Screen/Create";
import CreateButton from "../lib/createBtn";
import Reported from "../Screen/Reported";
import Investigate from "../Screen/Investigate";
import AdminPanel from "../Screen/AdminPanel";
// import AddNew from '../Screen/AddNew';
// import AddUser from '../Screen/AddUser';
// import EditUser from '../Screen/EditUser';
// import EditPwd from '../Screen/EditPwd';
// import UserInfo from "../Screen/UserDetails";
import ReportDetail from "../lib/ReportDetail";
import Email from "../Mail/send";
import { Box, Button, IconButton } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

function GoBackBtn() {
  const navigation = useNavigation();

  return (
    <IconButton pl={3} pt={5} onPress={() => navigation.navigate("Home")}>
      <AntDesign name="home" size={24} color="black" />
    </IconButton>
  );
}

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerLeft: () => <GoBackBtn />
      }}
    >
      <Stack.Screen name="Reported" component={Reported} />
      <Stack.Screen name="Investigate" component={Investigate} />
      <Stack.Screen name="AdminPanel" component={AdminPanel} />
      {/* <Stack.Screen name="UserInfo" component={UserInfo} /> */}
      {/* <Stack.Screen name="AddNew" component={AddNew} />
      <Stack.Screen name="EditUser" component={EditUser} />
      <Stack.Screen name="EditPwd" component={EditPwd} />
      <Stack.Screen name="AddUser" component={AddUser} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Report" component={Report} />
      <Stack.Screen name="ReportDetail" component={ReportDetail} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Admin"
        component={Admin}
        options={{
          headerRight: () => <CreateButton />
        }}
      />
      <Stack.Screen name="Email" component={Email} />
      <Stack.Screen
        name="Main"
        children={({ navigation }) => <Main navigation={navigation} />}
      />
    </Stack.Navigator>
  );
}

export default AppStack;
