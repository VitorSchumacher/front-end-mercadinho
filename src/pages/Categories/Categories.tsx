import React, { useState, useEffect } from "react";
import { useRoute } from "@react-navigation/native";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import {
  Screen,
  TextHeader,
  ViewProdcts,
  ImageProduct,
  TextNameproduct,
  TextPriceproduct,
  ViewProdct,
  TextNone,
} from "./styles";

const Categories = () => {
  const { navigate } = useNavigation();
  const [products, setProducts] = useState();
  const [complete, setComplete] = useState(false);
  const { params } = useRoute();

  const getData = () => {
    try {
      setComplete(false);
      fetch(
        `https://mercadinhodovitinho.herokuapp.com/category-one/?category_id=${params?.item}`
      )
        .then((resposta) => resposta.json())
        .then((json) => {
          setProducts(json);
          console.log(json);
        })
        .catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    } finally {
      setComplete(true);
    }
  };

  const navigateProduct = (id: number) => {
    console.log("oii");
    navigate("Product", {
      item: id,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  if (complete === false) {
    return <Screen />;
  }

  if (products?.length < 1) {
    return (
      <Screen>
        <TextHeader>{params.name}</TextHeader>
        <TextNone>Ainda não temos produtos desta categoria!</TextNone>
      </Screen>
    );
  }

  return (
    <Screen>
      <ScrollView>
        <TextHeader>{params.name}</TextHeader>
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

export default Categories;
