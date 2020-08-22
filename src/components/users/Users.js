import React, { useEffect, useState, useRef } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((results) => results.json())
      .then((users) => {
        setUsers(users);
        setFilteredUsers(users);
      });
  }, []);
  const searchText = useRef("");

  const onChange = (e) => {
    const filterText = e.target.value.toLowerCase();
    const filteredUsers = users.filter((u) => {
      return (
        u.name !== undefined && u.name.toLowerCase().indexOf(filterText) > -1
      );
    });
    setFilteredUsers(filteredUsers);
  };

  return (
    <div>
      <h1 className='center-align'>Users list</h1>
      <div className='user-search-container'>
        <form>
          <div className='input-field'>
            <input
              id='search'
              type='search'
              placeholder='Search Users...'
              ref={searchText}
              onChange={onChange}
              autoComplete='off'
            />
          </div>
        </form>
      </div>
      <div className='user-container'>
        <ul>
          {filteredUsers.map((u) => (
            <li className='left-align' key={u.id}>
              <span className='grayed-out'>{u.id}</span>
              <span className='user-name'> {u.name}</span>
              <span className='grayed-out'> @{u.username}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
