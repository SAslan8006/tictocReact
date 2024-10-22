import React, { createContext, useState } from 'react'

export const MyContext = createContext();
const MyContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return (
        <MyContext.Provider value={{ count, setCount }}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider