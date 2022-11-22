import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

import {
  Screen,
  ViewMain,
  TextHeader,
  ItemCategories,
  TextCategories,
  ViewCategories,
  ImageProduct,
  TextNameproduct,
  TextPriceproduct,
  ViewProdct,
  ViewProdctOn,
  ViewProdcts,
  Button,
  ButtonOff,
  TextButton,
  MainButton,
  ItemCategoriesOff,
} from "./style";

const DellProduct = () => {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [selcted, setSelected] = useState();
  const [selctedCat, setSelectedCat] = useState(null);

  const getCategory = (cat_id: number) => {
    try {
      setSelectedCat(cat_id);
      fetch(
        `https://mercadinhodovitinho.herokuapp.com/category-one/?category_id=${cat_id}`
      )
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

  const dell = () => {
    try {
      fetch(
        `https://mercadinhodovitinho.herokuapp.com/product-delete/?id_prod=${selcted}`
      ).catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    } finally {
      if (selctedCat === null) {
        getData();
      } else {
        getCategory(selctedCat);
      }
      setSelected(null);
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
      fetch("https://mercadinhodovitinho.herokuapp.com/product/")
        .then((resposta) => resposta.json())
        .then((json) => {
          setProducts(json);
          console.log(json);
        })
        .catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    } finally {
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Screen>
      <ScrollView>
        <ViewMain>
          <TextHeader>Categoria</TextHeader>
          <ViewCategories>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {selctedCat === null ? (
                <ItemCategoriesOff
                  onPress={() => {
                    getData();
                    setSelectedCat(null);
                  }}
                >
                  <TextCategories>Todos</TextCategories>
                </ItemCategoriesOff>
              ) : (
                <ItemCategories
                  onPress={() => {
                    getData();
                    setSelectedCat(null);
                  }}
                >
                  <TextCategories>Todos</TextCategories>
                </ItemCategories>
              )}
              {categories?.map((category) => {
                if (category.id !== selctedCat) {
                  return (
                    <ItemCategories
                      key={category.id}
                      onPress={() => getCategory(category.id)}
                    >
                      <TextCategories>{category.name}</TextCategories>
                    </ItemCategories>
                  );
                } else {
                  return (
                    <ItemCategoriesOff
                      key={category.id}
                      onPress={() => getCategory(category.id)}
                    >
                      <TextCategories>{category.name}</TextCategories>
                    </ItemCategoriesOff>
                  );
                }
              })}
            </ScrollView>
          </ViewCategories>
          <TextHeader>Produtos</TextHeader>
          <ViewProdcts>
            {products?.map((product) => {
              if (selcted !== product.id) {
                return (
                  <ViewProdct
                    key={product.id}
                    onPress={() => setSelected(product.id)}
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
              } else {
                return (
                  <ViewProdctOn
                    key={product.id}
                    onPress={() => setSelected(null)}
                  >
                    <ImageProduct
                      source={{
                        uri: product?.image,
                      }}
                    />
                    <TextNameproduct>{product.name}</TextNameproduct>
                    <TextPriceproduct>R${product.price},00</TextPriceproduct>
                  </ViewProdctOn>
                );
              }
            })}
          </ViewProdcts>
        </ViewMain>
      </ScrollView>
      <MainButton>
        {selcted ? (
          <Button onPress={() => dell()}>
            <TextButton>Excluir</TextButton>
          </Button>
        ) : (
          <View />
        )}
      </MainButton>
    </Screen>
  );
};

export default DellProduct;
