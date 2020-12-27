import {useState, useContext} from 'react';
import {UserContext} from '../Context';

export const useHooks = () => {
  const {list, setList} = useContext(UserContext);

  return {
    list,
    setList,
  };
};
