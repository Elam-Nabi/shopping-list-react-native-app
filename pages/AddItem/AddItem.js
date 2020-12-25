import React, {useState} from 'react';
import styled from 'styled-components/native';

const AddItem = ({list, setList}) => {
  return (
    <Container>
      <AddInput type="text" placeholder="What do you wanna buy?" />
    </Container>
  );
};

export default AddItem;

const Container = styled.View``;

const AddInput = styled.TextInput`
  color: #fff;
`;
