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
  margin-top: 5%;
`;
export const TextHeader = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #214917;
  margin-top: 10px;
`;

export const ViewCategories = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 2%;
`;
export const ItemCategories = styled.TouchableOpacity`
  border-width: 2px;
  border-color: #30862529;
  background-color: #30862529;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 5px;
`;
export const ItemCategoriesOff = styled(ItemCategories)`
  border-color: #33ff1829;
  background-color: #33ff1829;
`;

export const TextCategories = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #214917;
  padding: 3px 4px;
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

export const ViewProdctOn = styled(ViewProdct)`
  background-color: #33cc216e;
  border-color: #33cc216e;
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

export const Button = styled.TouchableOpacity`
  width: 50%;
  background-color: #0c6800;
  border-radius: 35px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4%;
  margin-bottom: 4%;
`;

export const ButtonOff = styled(Button)`
  background-color: #424242;
`;

export const TextButton = styled.Text`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

export const MainButton = styled(ViewMain)`
  background-color: #83b67d;
  margin-top: 0;
`;
