import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import * as Notifications from "expo-notifications";

import AppLaoding from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";
import { Routes } from "./src/routes";
import { PlantContextProvider, Plant } from "./src/context/plantsContext";
import DeviceContextProvider from "./src/context/deviceContext";
import { SnackBar,  SnackBarRef } from "./src/components/SnackBar";
import { SafeAreaProvider } from 'react-native-safe-area-context'

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async (notification) => {
        const data = notification.request.content.data.plant as Plant;
      }
    );
    return () => subscription.remove();
    // async function notifications() {
    // const notifications = await Notifications.getAllScheduledNotificationsAsync();
    // console.log(notifications);
    //     await Notifications.cancelAllScheduledNotificationsAsync();
    //   }
    //   notifications();
  }, []);

  if (!fontsLoaded) {
    return <AppLaoding />; // keep our splash page while fonts not loaded
  }
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <SafeAreaProvider>
        <DeviceContextProvider>
          <PlantContextProvider>
            <Routes />
            <SnackBar 
              ref={(ref) => {
                SnackBarRef.ref = ref
              }}
              />
          </PlantContextProvider>
        </DeviceContextProvider>
      </SafeAreaProvider>
    </>
  );
}
