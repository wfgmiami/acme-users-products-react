import React from 'react';

const UserList = ({ users })=> (

    <ul className="list-group">
    <h3>Users</h3>
    { users.map( (user,id) =>
      <li key={id} className="list-group-item"> { user.name }</li>
    )}
    </ul>
);



export default UserList;
