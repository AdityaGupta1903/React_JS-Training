import { createContext, useState } from "react";
export const CounterContext = createContext(null); {/* First Initialize the CreateContext Hook*/}

export const CounterContextProvider = ({children}) =>{
    const [count,setcount] = useState(0);
    return  <CounterContext.Provider value={{count,setcount}}>  {/* Create CounterContext.Provider for Distribution and the values are whhich to be accessed through other Componenets*/}
        {children}
     </CounterContext.Provider>
    
}