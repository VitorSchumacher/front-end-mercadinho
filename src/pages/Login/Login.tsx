import React, { useState } from "react";
import { ScrollView, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Ionicons } from "@expo/vector-icons";

import {
  Screen,
  ImageProduct,
  ViewMain,
  TextTitle,
  TextInputEmail,
  TextNemAcont,
  Button,
  TextButton,
  TextInputPass,
  EyeIcon,
  Input,
} from "./style";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [secury, setSecury] = useState(true);
  const { navigate } = useNavigation();

  const onChangeText = (value: string, alter: any) => {
    console.log(value);
    // alter(value);
  };

  const submitLogin = () => {
    if (email === "admin" && pass === "admin") {
      navigate("HomeAdmin");
    } else {
      navigate("Home");
    }
  };

  return (
    <Screen>
      <ScrollView>
        <ViewMain>
          <ImageProduct
            source={{
              uri: "https://seeklogo.com/images/C/Carrinho_de_Compras-logo-F251151A71-seeklogo.com.png",
            }}
          />
          <TextTitle>Mercadinho do Vitinho</TextTitle>
          <TextInputEmail
            placeholder="E-mail"
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInputPass>
            <Input
              placeholder="Senha"
              value={pass}
              secureTextEntry={secury}
              onChangeText={(text) => setPass(text)}
            />
            <EyeIcon onPress={() => setSecury(!secury)}>
              {secury === true ? (
                <Ionicons name="eye" size={25} color="#214917" />
              ) : (
                <Ionicons name="eye-off" size={25} color="#214917" />
              )}
            </EyeIcon>
          </TextInputPass>
          <Button onPress={submitLogin}>
            <TextButton>Entrar</TextButton>
          </Button>
          <TextNemAcont>Criar uma conta</TextNemAcont>
        </ViewMain>
      </ScrollView>
    </Screen>
  );
};
export default Login;
