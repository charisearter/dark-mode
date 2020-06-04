import { useLocalStorage } from './useLocalStorage'
import {  useEffect } from  'react'



export const useDarkMode = (initialValue) => {
  const [mode, setMode] = useLocalStorage('light', initialValue); // 'light' represents not in dark mode
  const theBody = document.querySelector('body'); //variable to target the body html element

  //add use effect
  useEffect(() => {
      if(mode) {
        theBody.classList.add('dark-mode'); //add dark-mode class to the body
      }else {
        theBody.classList.remove('dark-mode'); //remove dark-mode class from the body
      }
  }, [mode]); //dependent on mode state

  return [mode, setMode];
 
};

export default useDarkMode;