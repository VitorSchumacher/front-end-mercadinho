import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { navigate } = useNavigation();

  const navigateHome = () => {
    console.log("oii")
    navigate('NotesAndAbsences');
  };

  return (
    <View>
      <Text>Tela oi</Text>
      <TouchableOpacity onPress={navigateHome}>
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
