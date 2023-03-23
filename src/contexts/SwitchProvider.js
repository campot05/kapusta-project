import { createContext, useContext, useState } from 'react';


const SwitchContext = createContext();
export const useSwitchContext = () => useContext(SwitchContext);

const SwitchProvider = ({children}) => {

    const [transSwitch,setTransSwitch] = useState(null);

    const toggle = (value) =>
    setTransSwitch(value.toLowerCase());
    return(
        <SwitchContext.Provider value={{toggle,transSwitch}}>
            {children}
        </SwitchContext.Provider>
    )
};
export default SwitchProvider