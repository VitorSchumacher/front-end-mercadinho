import React from "react";
import { StatusBar } from 'expo-status-bar';

import { Text, View } from "react-native";

import Routes from "./routes";

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#0c6800" style="light" />
      <Routes />
    </>
  );
};

export default App;
