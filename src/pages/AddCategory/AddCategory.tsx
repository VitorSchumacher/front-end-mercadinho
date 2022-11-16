import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import {
  Screen,
  ViewMain,
  TextCategory,
  ViewInput,
  Input,
  Button,
  TextButton,
} from "./style";

const AddCategory = () => {
  const [data, setData] = useState({ name: "" });
  const [catchErr, setCatchErr] = useState(false);


  const submit = () => {
    try {
      console.log(data);
      fetch("https://mercadinhodovitinho.herokuapp.com/category/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));
    } catch (err) {
      console.log(err);
      setCatchErr(true);
    } finally {
      if (catchErr === false) {
        alert("Categoria cadastrada com sucesso!");
      } else {
        alert("Ocorreu um erro inesperado! Contate o desenvolvedor");
      }
      setData({ name: "" });
    }
  };

  return (
    <Screen>
      <ScrollView>
        <ViewMain>
          <TextCategory>Nome da categoria</TextCategory>
          <ViewInput>
            <Input
              value={data.name}
              onChangeText={(text: string) => setData({ ...data, name: text })}
            />
          </ViewInput>
          <Button onPress={() => submit()}>
            <TextButton>Cadastrar</TextButton>
          </Button>
        </ViewMain>
      </ScrollView>
    </Screen>
  );
};

export default AddCategory;
