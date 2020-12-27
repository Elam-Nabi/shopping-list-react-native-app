/* eslint-disable prettier/prettier */
import React, {useContext} from 'react';
import {StyleSheet, Button} from 'react-native';
import styled from 'styled-components/native';
import {UserContext} from '../../Context';
import {useHooks} from '../../useHooks/UseHooks';
import ItemInput from '../../components/ItemInput/ItemInput';

const AddItem = () => {
  const {list, setList} = useHooks();

  const addNewItem = () => {
    const itemDetails = {
      id: Math.floor((Math.random() * 1000) / 10),
      list,
    };
    setList([...list, itemDetails]);
  };

  return (
    <Container>
      <AddInput
        value={list}
        onChangeText={text => setList(text)}
        type="text"
        label="Add items"
        placeholder="What do you wanna buy?"
        placeholderTextColor={'white'}
      />
      <Button
      color="#ffd600"
      title="Add"
      style={styles.button}
       onPress={() => addNewItem()} />
    </Container>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  button: {
    color:'red',
  },
})

const Container = styled.View`
  top: 100px;
`;

const AddInput = styled.TextInput`
  color: #fff;
  height: 35px;
  background: #282829;
  border-radius: 3px;
  text-align: center;
  border: 1px solid ;
  margin-bottom:10px;
`;

// const AddButton = styled.Button`
//   background: #ffd600;
//   height: 40px;
//   width: 50px;
//   border-top-right-radius: 5px;
//   border-bottom-right-radius: 5px;
//   left: 164px;
//   bottom: 40px;
// `;

