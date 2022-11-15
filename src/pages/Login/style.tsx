import styled from "styled-components";

export const Screen = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #30862529;
`;

export const ImageProduct = styled.Image`
  width: 180px;
  height: 150px;
`;

export const ViewMain = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 30%;
`;
export const TextTitle = styled.Text`
  font-size: 26px;
  font-weight: bold;
  color: #214917;
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const TextInputEmail = styled.TextInput`
  width: 80%;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 20px;
  font-size: 18px;
  color: #214917;
  margin: 5px;
  border-width: 2px;
  border-color: #21491733;
`;
export const TextInputPass = styled.View`
  width: 80%;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 20px;
  font-size: 18px;
  color: #214917;
  margin: 5px;
  border-width: 2px;
  border-color: #21491733;
  display: flex;
  flex-direction: row;
`;
export const Input = styled.TextInput`
  font-size: 18px;
  width: 85%;
`;

export const EyeIcon = styled.TouchableOpacity`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 15%;
`;

export const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: #0c6800;
  border-radius: 35px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10%;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const TextNemAcont = styled.Text`
  font-size: 16px;
  color: #214917;
  text-decoration: underline;
  margin-top: 20%;
`;
