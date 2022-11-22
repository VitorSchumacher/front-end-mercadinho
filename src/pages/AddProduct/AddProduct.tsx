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
  ItemCategories,
  TextCategories,
  ViewCategories,
  ItemCategoriesOn,
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
  const [selectedCategory, setSelectedCategory] = useState(null);

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
      setData({ ...data, category: selectedCategory });
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
          <TextCategory>Categoria</TextCategory>
          <ViewCategories>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories?.map((category) => {
                if (data.category !== category.id) {
                  return (
                    <ItemCategories
                      key={category.id}
                      onPress={() =>
                        setData({ ...data, category: category.id })
                      }
                    >
                      <TextCategories>{category.name}</TextCategories>
                    </ItemCategories>
                  );
                } else {
                  return (
                    <ItemCategoriesOn key={category.id} onPress={() => {}}>
                      <TextCategories>{category.name}</TextCategories>
                    </ItemCategoriesOn>
                  );
                }
              })}
            </ScrollView>
          </ViewCategories>
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
          <Button onPress={submit}>
            <TextButton>Cadastrar</TextButton>
          </Button>
        </ViewMain>
      </ScrollView>
    </Screen>
  );
};

export default AddProduct;
