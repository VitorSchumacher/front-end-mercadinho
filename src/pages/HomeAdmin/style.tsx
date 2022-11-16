import styled from "styled-components";

export const Screen = styled.SafeAreaView`
  display: flex;
  flex: 1;
  background-color: #30862529;
`;
export const ViewMain = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const TouchableItem = styled.TouchableOpacity`
  background-color: #3086256c;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  border-color: #3086256c;
  border-width: 1px;
`;
export const TextItem = styled.Text`
  color: #214917;
  font-size: 20px;
  font-weight: bold;
  flex: 3;
  align-self: center;
`;
export const ViewSubItens = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;
export const TouchableSubItens = styled.TouchableOpacity`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  background-color: #21491736;
  padding: 10px 20px;
  border-color: #21491736;
  border-width: 1px;
  flex-direction: row;
`;
export const TextSubItem = styled.Text`
    color: #214917;
    font-size: 17px;
    text-align: center;
    margin: 0 10px;
`;
