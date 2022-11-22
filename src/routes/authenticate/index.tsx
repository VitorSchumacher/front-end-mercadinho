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
import HomeAdmin from "../../pages/HomeAdmin/HomeAdmin";
import AddProduct from "../../pages/AddProduct/AddProduct";
import AddCategory from "../../pages/AddCategory/AddCategory";

import DellCategory from "../../pages/DellCategory/DellCategory";


const Stack = createNativeStackNavigator();

const AuthenticatedRoutes: FC = () => {
  const { navigate } = useNavigation();

  const navigateHome = () => {
    console.log("oii");
    navigate("Home");
  };
  return (
    <Stack.Navigator
      initialRouteName="Login"
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
          title: "",
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
          title: "",
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
      <Stack.Screen
        name="HomeAdmin"
        component={HomeAdmin}
        options={{
          title: "Administrador",
          headerStyle: { backgroundColor: "#0c6800" },
          headerLeft: (props) => (
            <TouchableOpacity>{/* <GoBackIcon /> */}</TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddProduct"
        component={AddProduct}
        options={{
          title: "Adicionar Produto",
          headerStyle: { backgroundColor: "#0c6800" },
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigate("HomeAdmin")}>
              <GoBackIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddCategory"
        component={AddCategory}
        options={{
          title: "Adicionar Categoria",
          headerStyle: { backgroundColor: "#0c6800" },
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigate("HomeAdmin")}>
              <GoBackIcon />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="DellCategory"
        component={DellCategory}
        options={{
          title: "Deletar Categoria",
          headerStyle: { backgroundColor: "#0c6800" },
          headerLeft: (props) => (
            <TouchableOpacity onPress={() => navigate("HomeAdmin")}>
              <GoBackIcon />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
export default AuthenticatedRoutes;
