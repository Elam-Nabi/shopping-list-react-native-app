import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import AddItem from '../../pages/AddItem/AddItem';
import Header from '../../components/Header/Header';

import {useHooks} from '../../useHooks/UseHooks';

const Home = () => {
  const {list, setList} = useHooks();

  const [visible, setVisible] = useState(false);

  const seePage = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <Container>
      <Header />
      <Info>{visible ? <AddItem /> : null}</Info>
      <Press onPress={() => seePage()}>
        <OutputList
          data={list}
          renderItem={({item, index}) => <OutputText>{item}</OutputText>}
          keyExtractor={(item, index) => index.toString()}
        />
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
  bottom: 13px;
  color: #19191a;
  font-size: 18px;
`;

const OutputList = styled.FlatList``;

const OutputText = styled.Text`
  color: #fff;
  font-size: 22px;
  left: 50px;
  bottom: 20px;
`;
