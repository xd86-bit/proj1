import React, { useEffect,useState,useRef,createContext, useContext } from 'react';

const variable=createContext();

export function useVariable()
{
    return useContext(variable);
}

export default function Page1({children})
{
    const [var1,setVar1]=useState(0);
   
   return(
     
    <variable.Provider  value={{var1,setVar1}}>

       {children}
    </variable.Provider>



   );


}