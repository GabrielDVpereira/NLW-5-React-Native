import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Comfirmation } from "../pages/Comfirmation";
import { PlantSave } from "../pages/PlantSave";
import { routes } from "./routesName";
import { MyPlants } from "../pages/MyPlants";
import { AuthRoutes } from "./tab.routes";

import colors from "../styles/colors";
const StackRoutes = createStackNavigator();

export const AppRoutes: React.FC = () => (
  <StackRoutes.Navigator
    headerMode="none"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.white,
      },
    }}
  >
    <StackRoutes.Screen name={routes.welcome} component={Welcome} />
    <StackRoutes.Screen
      name={routes.userIdentification}
      component={UserIdentification}
    />
    <StackRoutes.Screen name={routes.confirmation} component={Comfirmation} />
    <StackRoutes.Screen name={routes.plantSelect} component={AuthRoutes} />
    <StackRoutes.Screen name={routes.plantSave} component={PlantSave} />
    <StackRoutes.Screen name={routes.myPlants} component={AuthRoutes} />
  </StackRoutes.Navigator>
);
