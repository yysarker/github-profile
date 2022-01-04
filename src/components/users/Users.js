import UserItem from "./UserItem"
import React, { useState, useEffect } from 'react'
import Spinner from "../layout/Spinner";
import axios from "axios";

const Users = () => {
     const userStyle = {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '1rem'
     };

     //Get the API data 
     const [users, setUsers] = useState([]);
     const [loading, setLoading] = useState(true);


     const userData = async () => {
          try {
               const result = await axios //have a issue
                    .get('https://api.github.com/users')
                    .then(res => {
                         setUsers(res.data)
                    })
               setLoading(false)
          } catch (error) {
               console.log(error);
          }
     }
     useEffect(() => {
          userData();
     }, []);

     if (loading) {
          return <Spinner />
     } else {
          return (
               <div style={userStyle}>
                    {users.map(user => (
                         <UserItem key={user.id} user={user}></UserItem>
                    ))}
               </div>
          );
     }


}

export default Users;