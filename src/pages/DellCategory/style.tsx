import styled from "styled-components";

export const Screen = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #30862529;
`;

export const ViewCategories = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
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

export const TextCategories = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #214917;
  padding: 3px 4px;
`;
export const TextHeader = styled.Text`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  color: #214917;
  margin-top: 10px;
`;

export const ItemCategoriesOn = styled(ItemCategories)`
  background-color: #39ce2588;
  border-color: #39ce2588;
`
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

export const ViewMain = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 10%;
`;