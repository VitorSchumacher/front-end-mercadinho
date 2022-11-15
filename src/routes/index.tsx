import React from "react";
import { Text, View } from "react-native";

import AuthenticatedRoutes from "./authenticate";
import { NavigationContainer } from "@react-navigation/native";


const Routes = () => {
  return (
    <NavigationContainer>
      <AuthenticatedRoutes/>
    </NavigationContainer>
  );
};

export default Routes;
