import React from 'react'
import CalmamenteContext from '../context/CalmamenteContext'
import useStorage from '../../utils/useStorage'

const Provider = ({children}) => {

    const [token, setToken] = useStorage('token');


   return(
      <CalmamenteContext.Provider value={{token, setToken}}>
        {children}
      </CalmamenteContext.Provider>
)}

export default Provider