import React, { useState, useEffect } from "react";
import { Text, View, ScrollView } from "react-native";

import {
  ItemCategories,
  TextCategories,
  ViewCategories,
  Screen,
  TextHeader,
  ItemCategoriesOn,
  Button,
  TextButton,
  ViewMain,
} from "./style";

const DellCategory = () => {
  const [categories, setCategories] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const dell = () => {
    try {
      fetch(
        `https://mercadinhodovitinho.herokuapp.com/category-delete/?id_cat=${selectedCategory}`
      ).catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    } finally {
      getData();
    }
  };

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

  useEffect(() => {
    getData();
  }, []);

  return (
    <Screen>
      <ScrollView>
        <ViewMain>
          <TextHeader>Selecione a categoria para deletar</TextHeader>
          <ViewCategories>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {categories?.map((category) => {
                if (selectedCategory !== category.id) {
                  return (
                    <ItemCategories
                      key={category.id}
                      onPress={() => setSelectedCategory(category.id)}
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
          <Button onPress={() => dell()}>
            <TextButton>Entrar</TextButton>
          </Button>
        </ViewMain>
      </ScrollView>
    </Screen>
  );
};

export default DellCategory;
