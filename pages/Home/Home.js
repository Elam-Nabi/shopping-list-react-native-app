/* eslint-disable prettier/prettier */
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import AddItem from '../../pages/AddItem/AddItem';
import Header from '../../components/Header/Header';
import ItemList from '../../components/ItemList/ItemList';

import {useHooks} from '../../useHooks/UseHooks';

const Home = () => {
  const {list, setList} = useHooks();

  const [visible, setVisible] = useState(false);

  const seePage = () => {
    setVisible(!visible);
  };

  const removeItem = (id) => {
    setList(prevList => {
      return prevList.filter(item => item.id !== id)
    })
  }


  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Container>
      <Header />
      <Info>{visible ? <AddItem /> : null}</Info>
      <OutputList
        data={list}
        renderItem={({item}) => <ItemList removeItem={removeItem} item={item} />}
      />
      <Press onPress={() => seePage()}>
        <InfoText>+ Add new item</InfoText>
      </Press>
    </Container>
  );
};

export default Home;

const Container = styled.View`
  background: #19191a;
  height: 100%;
`;

const Info = styled.Text`
  top: 30px;
  left: 100px;
`;

const Press = styled.TouchableOpacity`
  background: #ffd600;
  width: 80%;
  height: 50px;
  bottom: 20px;
  border-radius: 7px;
  border: none;
  left: 40px;
  top: 580px;
  position: absolute;
`;

const InfoText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 900;
  top: 10px;
  color: #19191a;
  font-size: 18px;
`;

const OutputList = styled.FlatList`
  display: flex;
  top: 20px;
`;

const OutputText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
