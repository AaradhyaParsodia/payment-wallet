import UserTile from "./UserTile";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Users(){
    const inputDefaultClass = "border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-11/12 p-2.5 m-4";

    const [filter, setFilter] = useState("")
    const [users, setUsers] = useState([]);


    // !!!!!! Add ^Debuncing and pagination

    useEffect(()=>{
        axios.get(`http://localhost:3000/api/v1/user/bulk?filter=${filter}`, { 
            headers: {
                'authorization': 'Bearer ' + localStorage.getItem('token')
            } 
        })
            .then(response => {
                setUsers(response.data.user);
            })
    },[filter])

    return <div>
        <p className="font-bold text-xl mt-4">Users</p>
        <input
                onChange={e => {
                    setFilter(e.target.value);
                }}
                placeholder={"Search users....."}
                htmlFor={"text"}
                type={"searchUser"}
                id={"searchUser"}
                className={inputDefaultClass}
        />

        <div>
            {users.map(users => <UserTile key={users._id} user={users}/>)}
        </div>

        
    </div>
}