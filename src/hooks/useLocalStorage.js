import { useState } from 'react';


export const useLocalStorage = (key, initialValue) => {

  //To retrieve an item from localStorage, call localStorage.getItem('itemName')
//If that item doesn't exist, it will return undefined
  const [storedValue, setStoredValue] = useState(() =>{

    //get from localStorage by key
    const item= window.localStorage.getItem(key);

    //Parse and return stored json or, if undefined, return initialValue
    return item ? JSON.parse(item) : initialValue;
  });

  //setter function to setValue

  const setValue = value => {
    // Save State
    setStoredValue(value);

    //Save to local storage
    window.localStorage.setItem(key, JSON.stringify(value));
  };
//return the variables in useState as an array
  return [storedValue, setValue];
};

export default useLocalStorage



