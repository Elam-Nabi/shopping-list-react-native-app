import {useState, useContext} from 'react';
import {UserContext} from '../Context';

export const useHooks = () => {
  const {list, setList} = useContext(UserContext);

  const handleList = (e) => {
    setList(e.target.value);
  };
  return {
    list,
    setList,
    handleList,
  };
};
