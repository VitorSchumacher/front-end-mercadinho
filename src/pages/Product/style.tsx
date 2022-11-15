import styled from "styled-components";

export const Screen = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #30862529;
`;

export const ImageProduct = styled.Image`
  width: 100%;
  height: 350px;
`;

export const ViewMainIform = styled.View`
  margin-top: -20px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #30862529;
  height: 20px;
`;
export const ViewMain = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ViewSomeLine = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 75%;
`;

export const TextName = styled.Text`
  font-size: 25px;
  color: #214917;
  font-weight: bold;
  margin-top: 15px;
`;

export const TextPrice = styled.Text`
  font-size: 25px;
  color: #298611;
  margin-top: 10px;
  font-weight: bold;
`;

export const ViewDescriptions = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 25px 10px;
`;
export const TextDescription = styled.Text`
  text-align: center;
  color: #214917;
`;

export const ViewBuy = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #0c6800;
`;

export const ViewBuyButton = styled.TouchableOpacity`
  background-color: #44f7179b;
  border-radius: 60px;
  width: 30%;
  padding: 12px 10px;
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ViewAddCar = styled.View`
  /* background-color: #fdba00eb; */
  background-color: #838383eb;
  border-radius: 60px;
  width: 30%;
  padding: 12px 10px;
  margin: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TextBuy = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
