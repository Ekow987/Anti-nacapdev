import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/Routes/stackRoute";
import { persistor, store } from "./src/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { ReportCaseContextProvider } from "./src/context/reportCase.context";

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <NativeBaseProvider>
            <ReportCaseContextProvider>
              <AppStack />
            </ReportCaseContextProvider>
          </NativeBaseProvider>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
