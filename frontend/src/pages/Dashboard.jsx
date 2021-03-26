// React Imports
import React, { useEffect } from 'react'
// 3rd Party Imports
import { useDispatch, useSelector } from 'react-redux'
// Material UI Imports
// Local Imports

const Dashboard = ({ history }) => {

    // Redux
    const userLogin = useSelector( state => state.userLogin )
    const { userInfo } = userLogin

    // useEffect
    useEffect(()=>{
        if(!userInfo){
            history.push('/login')
        }
    }, [userInfo, history])

    return (
        <div>
            Dashboard
        </div>
    )
}

export default Dashboard
