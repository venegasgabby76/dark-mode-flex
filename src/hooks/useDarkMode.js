import useLocalStorage from '../hooks/useLocalStorage'
import { useEffect } from 'react'



const useDarkMode  = (key, initialValue) =>{
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue);

    useEffect(() => {
        if (darkMode){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    }, [darkMode]);

    return[darkMode, setDarkMode];
}

export default useDarkMode;


//basically what we are doing here is we are importing the localstorage to see whether or not we have dark mode enabled. 
//we then want to check and see if the value in uselocalstorage is true 
//for this we want to use the useeffect hook(we are looking for dom manipulation)
