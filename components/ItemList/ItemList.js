import React from 'react';
import styled from 'styled-components/native';

const ItemList = ({item}) => {
  return (
    <Container>
      <TextList>{item.list}</TextList>
    </Container>
  );
};

export default ItemList;

const Container = styled.TouchableOpacity`
  background: #282829;
  border-radius: 5px;
  margin: 5px;
  top: 20px;
  z-index: 1;
`;

const TextList = styled.Text`
  text-align: center;
  padding: 10px;
  color: #fff;
`;
