import styled from "styled-components";

export const Screen = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #30862529;
`;

export const TextHeader = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #214917;
  margin-top: 10px;
`;
export const ViewProdcts = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  flex-wrap: wrap;
`;
export const ViewProdct = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #30862529;
  background-color: #30862511;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
`;

export const ImageProduct = styled.Image`
  width: 180px;
  height: 150px;
  min-height: 45px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const TextNameproduct = styled.Text`
  font-size: 15px;
  color: #214917;
  margin: 5px 0 0;
`;
export const TextPriceproduct = styled.Text`
  font-size: 20px;
  color: #298611;
  font-weight: bold;
  margin: 5px 0;
`;
export const TextNone = styled.Text`
  color: #298611;
  font-size: 20px;
  margin: 200px 10px;
  text-align: center;
`;
