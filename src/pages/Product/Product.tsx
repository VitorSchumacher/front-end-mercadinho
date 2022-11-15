import React, { useState, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";

import {
  Screen,
  ImageProduct,
  ViewMainIform,
  ViewMain,
  TextName,
  TextPrice,
  ViewSomeLine,
  ViewDescriptions,
  TextDescription,
  ViewBuy,
  ViewBuyButton,
  TextBuy,
  ViewAddCar,
} from "./style";

const Product = () => {
  const [product, setProduct] = useState();
  const [complete, setComplete] = useState(false);
  const { params } = useRoute();

  const getData = () => {
    try {
      setComplete(false);
      fetch(
        `https://mercadinhodovitinho.herokuapp.com/product-one/?ids=${params?.item}`
      )
        .then((resposta) => resposta.json())
        .then((json) => {
          setProduct(json);
          console.log(json);
        })
        .catch((error) => console.error(error));
    } catch (e) {
      console.log(e);
    } finally {
      setComplete(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (complete === false) {
    return <Screen />;
  }

  return (
    <Screen>
      <ScrollView>
        {product?.map((item) => {
          return (
            <>
              <ImageProduct
                source={{
                  uri: item?.image,
                }}
              />
              <ViewMainIform />
              <ViewMain>
                <ViewSomeLine>
                  <TextName>{item?.name}</TextName>
                  <TextPrice>R${item?.price},00</TextPrice>
                </ViewSomeLine>
                <ViewDescriptions>
                  <TextDescription>{item?.description}</TextDescription>
                </ViewDescriptions>
              </ViewMain>
            </>
          );
        })}
      </ScrollView>
      <ViewBuy>
        <ViewAddCar>
          <TextBuy>Add</TextBuy>
        </ViewAddCar>
        <ViewBuyButton>
          <TextBuy>Comprar</TextBuy>
        </ViewBuyButton>
      </ViewBuy>
    </Screen>
  );
};

export default Product;
