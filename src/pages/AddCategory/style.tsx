import styled from "styled-components";

export const Screen = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #30862529;
`;

export const ViewMain = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;
`;
export const TextCategory = styled.Text`
  color: #214917;
  font-size: 20px;
  font-weight: bold;
`;
export const ViewInput = styled.View`
  width: 80%;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 20px;
  font-size: 18px;
  margin-top: 5%;
`;
export const Input = styled.TextInput`
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: #0c6800;
  border-radius: 35px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;