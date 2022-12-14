import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";

import {
  Screen,
  ViewMain,
  TouchableItem,
  TextItem,
  ViewSubItens,
  TouchableSubItens,
  TextSubItem,
} from "./style";
import { Ionicons } from "@expo/vector-icons";

const HomeAdmin = () => {
  const { navigate } = useNavigation();
  const [seeAdd, setSeeAdd] = useState(false);
  const [seeDel, setSeeDel] = useState(false);

  //   const alterState = (setting:any,state:boolean) => {
  //     setting(!state);
  //   }

  return (
    <Screen>
      <ScrollView>
        <ViewMain>
          <TouchableItem onPress={() => setSeeAdd(!seeAdd)}>
            <TextItem>Adicionar Itens</TextItem>
            {seeAdd === true ? (
              <Ionicons name="chevron-up" size={25} color="#214917" />
            ) : (
              <Ionicons name="chevron-down" size={25} color="#214917" />
            )}
          </TouchableItem>
          {seeAdd === true ? (
            <ViewSubItens>
              <TouchableSubItens onPress={() => navigate("AddProduct")}>
                <Ionicons name="add-circle" size={25} color="#214917" />
                <TextSubItem>Produto</TextSubItem>
              </TouchableSubItens>
              <TouchableSubItens onPress={() => navigate("AddCategory")}>
                <Ionicons name="add-circle" size={25} color="#214917" />
                <TextSubItem>Categoria</TextSubItem>
              </TouchableSubItens>
            </ViewSubItens>
          ) : (
            <View />
          )}
          <TouchableItem onPress={() => setSeeDel(!seeDel)}>
            <TextItem>Remover Itens</TextItem>
            {seeDel === true ? (
              <Ionicons name="chevron-up" size={25} color="#214917" />
            ) : (
              <Ionicons name="chevron-down" size={25} color="#214917" />
            )}
          </TouchableItem>
          {seeDel === true ? (
            <ViewSubItens>
              <TouchableSubItens onPress={() => navigate("DellProduct")}>
                <Ionicons name="remove-circle" size={25} color="#214917" />
                <TextSubItem>Produto</TextSubItem>
              </TouchableSubItens>
              <TouchableSubItens onPress={() => navigate("DellCategory")}>
                <Ionicons name="remove-circle" size={25} color="#214917" />
                <TextSubItem>Categoria</TextSubItem>
              </TouchableSubItens>
            </ViewSubItens>
          ) : (
            <View />
          )}
        </ViewMain>
      </ScrollView>
    </Screen>
  );
};

export default HomeAdmin;
