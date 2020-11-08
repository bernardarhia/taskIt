import React,{useContext} from 'react'
import UserContext from "../../context/userContext";

function UserInfo() {
    const { user, setUser } = useContext(UserContext);
    return (
        <h1>Welcome {user.user.username}</h1>
    )
}

export default UserInfo
