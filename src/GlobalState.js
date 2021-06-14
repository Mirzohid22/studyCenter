import React, { createContext, useState } from 'react'

export const GlobalState = createContext()

export const DataProvider = ({children}) =>{
    const [data, setData] = useState(false)

    const state = {
        data: [data, setData],
    }

    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}
