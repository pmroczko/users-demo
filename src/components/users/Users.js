import React, { useEffect, useState, useRef } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  useEffect(() => {
    const demoData = [
      {
        id: 1,
        name: "John Doe",
        tag: "John",
      },
      {
        id: 2,
        name: "Henry Ford",
        tag: "Henry",
      },
      {
        id: 3,
        name: "Jane Smith",
        tag: "Jane",
      },
    ];
    setUsers(demoData);
    setFilteredUsers(demoData);
  }, []);
  const searchText = useRef("");

  const onChange = (e) => {
    const filterText = e.target.value;
    const filteredUsers = users.filter((u) => {
      const isName = u.name !== undefined && u.name.indexOf(filterText) > -1;
      const isTag = u.tag !== undefined && u.tag.indexOf(filterText) > -1;
      return isName || isTag;
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
              <span className='grayed-out'> @{u.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
