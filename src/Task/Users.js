import { NavLink } from "react-router-dom";
import { API } from "./apiService";
import { useState, useEffect } from "react";

const Users = ()=>{

    const [users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(false);

    

    const fetchUsers = async () => {
        try {
          setLoading(true);
          const response = await API.getUsers();
          setLoading(false);
          setUsers(response.data);
        }
         catch (error) {
          setLoading(false);
          setUsers("404 Error")
          
          
        }
      };
      
      useEffect(() => {
        fetchUsers();
       
      }, []);
    
      console.log(users)
    return(<>
        <p>Hello world</p>
        {Loading ? (
        <center>Loading...</center>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}

        <NavLink to="/adduser" className="Nav-link">Add User</NavLink>
        </>
    )
};
export default Users;

