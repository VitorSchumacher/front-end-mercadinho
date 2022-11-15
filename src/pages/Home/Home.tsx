import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import { useNavigation } from "@react-navigation/native";

interface IItemCategories {
  id: number;
  name: string;
}

import {
  Screen,
  TextHeader,
  TextSub,
  ItemCategories,
  ViewCategories,
  TextCategories,
  ViewProdcts,
  ViewProdct,
  ImageProduct,
  TextNameproduct,
  TextPriceproduct,
} from "./style";

const Home = () => {
  const { navigate } = useNavigation();
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();

  const getData = () => {
    try {
      fetch("https://mercadinhodovitinho.herokuapp.com/category/")
        .then((resposta) => resposta.json())
        .then((json) => {
          setCategories(json);
          console.log(json);
        })
        .catch((error) => console.error(error));
      fetch("https://mercadinhodovitinho.herokuapp.com/product/")
        .then((resposta) => resposta.json())
        .then((json) => {
          setProducts(json);
          console.log(json);
        })
        .catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    }
  };

  const navigateProduct = (id: number) => {
    console.log("oii");
    navigate("Product", {
      item: id,
    });
  };

  const navigateCategories = (id: number, name: string) => {
    console.log("oii");
    navigate("Categories", {
      item: id,
      name: name,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Screen>
      <ScrollView>
        <TextHeader>Mercadinho do Vitinho</TextHeader>
        <TextSub>Categorias</TextSub>
        <ViewCategories>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories?.map((category) => (
              <ItemCategories
                key={category.id}
                onPress={() => navigateCategories(category.id, category.name)}
              >
                <TextCategories>{category.name}</TextCategories>
              </ItemCategories>
            ))}
          </ScrollView>
        </ViewCategories>
        <TextSub>Produtos em destaque</TextSub>
        <ViewProdcts>
          {products?.map((product) => {
            if (product.price !== 0) {
              return (
                <ViewProdct
                  key={product.id}
                  onPress={() => navigateProduct(product.id)}
                >
                  <ImageProduct
                    source={{
                      uri: product?.image,
                    }}
                  />
                  <TextNameproduct>{product.name}</TextNameproduct>
                  <TextPriceproduct>R${product.price},00</TextPriceproduct>
                </ViewProdct>
              );
            }
          })}
        </ViewProdcts>
      </ScrollView>
    </Screen>
  );
};

export default Home;
