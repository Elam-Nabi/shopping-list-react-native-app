/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import styled from 'styled-components/native';
import {UserContext} from '../../Context';

const AddItem = () => {
  const {list, setList} = useContext(UserContext);

  const handleList = (e) => {
    setList(e.target.value);
  };

  const addNewItem = () => {
    const itemDetails = {
      id: Math.floor((Math.random() * 1000) / 10),
      list,
    };
    setList([...setList, itemDetails]);
  };

  return (
    <Container>
      <AddInput
        value={list}
        onChange={handleList}
        type="text"
        placeholder="What do you wanna buy?"
        placeholderTextColor={'white'}
      />
      <AddButton onPress={() => addNewItem()}>
        <ButtonInfo>Add</ButtonInfo>
      </AddButton>
    </Container>
  );
};

export default AddItem;

const Container = styled.View`
  top: 100px;
`;

const AddInput = styled.TextInput`
  color: #fff;
  height: 40px;
  background: #282829;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  text-align: center;
  border: 1px solid #ffd600;
`;

const AddButton = styled.TouchableOpacity`
  background: #ffd600;
  height: 40px;
  width: 50px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  left: 164px;
  bottom: 40px;
`;

const ButtonInfo = styled.Text`
  text-align: center;
  margin-top: 10px;
`;
