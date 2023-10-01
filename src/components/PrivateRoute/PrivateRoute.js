import React, { useContext } from 'react'
import { contextAPI } from '../../App'

const PrivateRoute = () => {

    const [profile, setProfile] = useContext(contextAPI)

    return (
        <div>

            <h1>hello private </h1>

        </div>
    )
}

export default PrivateRoute
