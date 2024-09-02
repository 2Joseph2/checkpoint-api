import { useState , useEffect } from "react";
import axios from "axios";
import User from "./User";

const UserList = () => {

    const [userList,setUserList]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((res)=>{setUserList(res.data)})
            .catch((err)=>{console.log(err)})
    },[])

    return (
        <div className="user-list">
            {
                userList.map((user) => {
                    return ( <User user={user}></User> )
                })
            }
        </div>
    );
}
 
export default UserList;