import UserItem from "./UserItem"
import React, { useState, useEffect } from 'react'

function Users() {
     const userStyle = {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '1rem'
     };

     //Get the API data 
     const [users, setUsers] = useState([]);

     useEffect(() => {
          fetch('https://api.github.com/users')
               .then(response => response.json())
               .then(data => {
                    setUsers(data);
                    // console.log(data);
               })
               .catch(error => console.log(error))
     }, [])

     return (
          <div style={userStyle}>
               {users.map(user => (
                    <UserItem key={user.id} user={user}></UserItem>
               ))}
          </div>
     );

}

export default Users;