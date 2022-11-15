import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

const NotesAndAbsences = () => {
  const { navigate } = useNavigation();


  return (
    <View>
      <Text>Tela Notas e Faltas</Text>
      <TouchableOpacity>
        <Text>Proximo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotesAndAbsences;
