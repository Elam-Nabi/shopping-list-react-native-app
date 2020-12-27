import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

import {UserContext} from './Context';
import Home from './pages/Home/Home';

const App = () => {
  const [list, setList] = useState([
    {id: 1, list: 'Banana'},
    {id: 2, list: 'Onions'},
    {id: 3, list: 'Garlic'},
    {id: 4, list: 'Oil'},
  ]);

  return (
    <UserContext.Provider value={{list, setList}}>
      <Home />
    </UserContext.Provider>
  );
};

export default App;
