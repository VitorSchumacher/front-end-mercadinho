import React, { FC } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import { Text, TouchableOpacity } from "react-native";
import GoBackIcon from "../../assets/images/go-back-icon.svg";

import HeaderHome from "../../components/HeaderHome/HeaderHome";

import SideMenu from "../../assets/images/side-menu-icon.svg";

import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Product from "../../pages/Product/Product";
import Categories from "../../pages/Categories/Categories";

const Stack = createNativeStackNavigator();

const AuthenticatedRoutes: FC = () => {
  const { navigate } = useNavigation();

  const navigateHome = () => {
    console.log("oii");
    navigate("Home");
  };
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        contentStyle: {
          backgroundColor: "#fff",
        },
        headerTitleStyle: { color: "#fff" },
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerStyle: { backgroundColor: "#0c6800" },
          headerTitleAlign: "center",
          headerLeft: (props) => (
            <TouchableOpacity>
              <SideMenu />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerStyle: { backgroundColor: "#0c6800" },
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={{
          headerStyle: { backgroundColor: "#0c6800" },
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigateHome()}>
              <GoBackIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{
          headerStyle: { backgroundColor: "#0c6800" },
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigateHome()}>
              <GoBackIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthenticatedRoutes;
