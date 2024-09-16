// src/components/SearchUsers.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SearchUsers = () => {
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
   console.log('search', search)
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:4000/users', {
          params: { searchUsers: search }
        });
        setUsers(response.data);
      } catch (error) {
        console.log()
        console.error('Error fetching users:', error.message);
      }
    };

    fetchUsers();
  }, [search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.elements.searchUsers.value);
  };

  const handleReset = () => {
    setSearch('');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Search Users</h2>
      <form onSubmit={handleSearch} className="flex mb-4">
        <input
          type="text"
          name="searchUsers"
          placeholder="Search by name, phone number, or email"
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Search</button>
        {search && (
          <button type="button" onClick={handleReset} className="bg-gray-500 text-white px-4 py-2 rounded ml-2">Reset Search</button>
        )}
      </form>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">User ID</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Phone Number</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Gender</th>
            <th className="py-2 px-4 border-b">Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td className="py-2 px-4 border-b">{user._id}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b">{user.phone_number}</td>
              <td className="py-2 px-4 border-b">{user.email}</td>
              <td className="py-2 px-4 border-b">{user.gender}</td>
              <td className="py-2 px-4 border-b">{user.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchUsers;
