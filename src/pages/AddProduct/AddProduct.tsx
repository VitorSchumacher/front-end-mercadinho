import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

import {
  Screen,
  Button,
  Input,
  TextButton,
  TextCategory,
  ViewInput,
  ViewMain,
} from "./style";

const AddProduct = () => {
  const initialState = {
    name: "",
    description: "",
    image: "",
    price: "",
    category: 0,
  };
  const [data, setData] = useState(initialState);
  const [catchErr, setCatchErr] = useState(false);
  const [categories, setCategories] = useState();

  const getData = () => {
    try {
      fetch("https://mercadinhodovitinho.herokuapp.com/category/")
        .then((resposta) => resposta.json())
        .then((json) => {
          setCategories(json);
          console.log(json);
        })
        .catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    }
  };

  const submit = () => {
    try {
      console.log(data);
      fetch("https://mercadinhodovitinho.herokuapp.com/product/", {
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
        alert("Produto cadastrado com sucesso!");
      } else {
        alert("Ocorreu um erro inesperado! Contate o desenvolvedor");
      }
      setData(initialState);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Screen>
      <ScrollView>
        <ViewMain>
          <TextCategory>Nome do produto</TextCategory>
          <ViewInput>
            <Input
              value={data.name}
              onChangeText={(text: string) => setData({ ...data, name: text })}
            />
          </ViewInput>
          <TextCategory>Descrição do produto</TextCategory>
          <ViewInput>
            <Input
              value={data.description}
              onChangeText={(text: string) =>
                setData({ ...data, description: text })
              }
            />
          </ViewInput>
          <TextCategory>Link para a imagem</TextCategory>
          <ViewInput>
            <Input
              value={data.image}
              onChangeText={(text: string) => setData({ ...data, image: text })}
            />
          </ViewInput>
          <TextCategory>Preço</TextCategory>
          <ViewInput>
            <Input
              value={data.price}
              onChangeText={(text: string) => setData({ ...data, price: text })}
            />
          </ViewInput>
          <TextCategory>Categoria</TextCategory>
          <ViewInput>
            <Input
              value={data.category}
              onChangeText={(text: number) =>
                setData({ ...data, category: text })
              }
            />
          </ViewInput>
          <Button onPress={submit}>
            <TextButton>Cadastrar</TextButton>
          </Button>
        </ViewMain>
      </ScrollView>
    </Screen>
  );
};

export default AddProduct;
