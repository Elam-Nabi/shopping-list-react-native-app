import React from 'react';
import styled from 'styled-components/native';

const Header = () => {
  return (
    <Container>
      <Top>Shopping list</Top>
    </Container>
  );
};

export default Header;

const Container = styled.View``;

const Top = styled.Text`
  top: 10px;
  color: #fff;
  text-align: center;
  font-size: 22px;
`;
