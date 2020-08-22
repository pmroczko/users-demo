import React, { useState, useRef } from "react";

const Users = () => {
  //const [searchText, setSearchText] = useState("");
  const searchText = useRef("");
  const users = [
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

  const onChange = (e) => {
    const value = e.target.value;
    console.log(`onChange with new Value ${value}`);
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
            />
          </div>
        </form>
      </div>
      <div className='user-container'>
        <ul>
          {users.map((u) => (
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
