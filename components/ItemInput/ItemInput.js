import React from 'react';
import styled from 'styled-components/native';

const ItemInput = ({list}) => {
  return (
    <ItemContainer>
      <ItemText>{list}</ItemText>
    </ItemContainer>
  );
};

export default ItemInput;

const ItemContainer = styled.View``;

const ItemText = styled.Text``;
