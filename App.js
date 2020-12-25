import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {UserContext} from './Context';
import AddItem from './pages/AddItem/AddItem';

import Header from './components/Header/Header';

const App = () => {
  const [list, setList] = useState([]);
  const [visible, setVisible] = useState(false);

  const seePage = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <Header />
      <Info>{visible ? <AddItem list={list} setList={setList} /> : null}</Info>
      <Press onPress={() => seePage()} title="+ Add new item">
        <InfoText>+ Add new item</InfoText>
      </Press>
    </Container>
  );
};

export default App;

const Container = styled.View`
  background: #19191a;
  height: 100%;
`;

const Info = styled.Text`
  margin: auto;
  color: red;
  font-size: 22px;
`;

const Press = styled.TouchableOpacity`
  background: #ffd600;
  width: 80%;
  height: 50px;
  bottom: 20px;
  border-radius: 7px;
  border: none;
  left: 40px;
`;

const InfoText = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  top: 13px;
  font-weight: 900;
  color: #19191a;
  font-size: 18px;
`;
