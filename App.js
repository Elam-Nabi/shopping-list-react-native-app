import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {UserContext} from './Context';
import Home from './pages/Home/Home';

const App = () => {
  const [list, setList] = useState('');

  return (
    <UserContext.Provider value={{list, setList}}>
      <Home />
    </UserContext.Provider>
  );
};

export default App;
