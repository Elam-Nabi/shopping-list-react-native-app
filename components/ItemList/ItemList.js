import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ItemList = ({item, removeItem}) => {
  return (
    <Container>
      <TextList>{item.list}</TextList>
      <Icon
        onPress={() => removeItem(item.id)}
        name="remove"
        size={25}
        color="#ffd600"
      />
    </Container>
  );
};

export default ItemList;

const Container = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #282829;
  border-radius: 5px;
  margin: 5px;
  top: 20px;
  width: 400px;
`;

const TextList = styled.Text`
  font-size: 18px;
  padding: 10px;
  color: #fff;
`;
