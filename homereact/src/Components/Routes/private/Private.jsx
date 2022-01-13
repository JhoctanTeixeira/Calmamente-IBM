import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import CalmamenteContext from '../../context/CalmamenteContext'


const RoutesPrivate = ({component: Component, ...rest}) => {

    const { token } = useContext(CalmamenteContext)

return(

<Route {...rest} render={()=> token
    ?
    <Component {...rest} />
    :
    <Redirect to="/index"/> 
}/>
)}

export default RoutesPrivate;