import React, { useState } from 'react';
import axios from 'axios';

function UserForm() {
  const [userData, setUserData] = useState({
    fname:'',
    email:'',
    lname:'',
    username:'',
    password:'',
    gender:'',
    date_of_birth:'',
    phone_number:'',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (e.nativeEvent.submitter.name === 'createUser') {
        await axios.post('http://localhost:4000/register', {userData});
      } else if (e.nativeEvent.submitter.name === 'editUser') {
        await axios.put('http://localhost:4000/users', userData);
      } else if (e.nativeEvent.submitter.name === 'terminateUser') {
        await axios.delete('http://localhost:4000/users', { data: { username: userData.username } });
      }
      alert('Action performed successfully.');
    } catch (error) {
      console.log('Error performing action:', error.message);
      alert('Error performing action.',error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4 p-4">
      <input type="text" name="username" placeholder="Username" value={userData.username} onChange={handleChange} className="border p-2 w-full" required />
      <input type="email" name="email" placeholder="Email" value={userData.email} onChange={handleChange} className="border p-2 w-full" />
      <input type="password" name="password" placeholder="Password" value={userData.password} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="fname" placeholder="First Name" value={userData.fname} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="lname" placeholder="Last Name" value={userData.lname} onChange={handleChange} className="border p-2 w-full" />
      <select name="gender" value={userData.gender} onChange={handleChange} className="border p-2 w-full">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      <input type="date" name="date_of_birth" value={userData.date_of_birth} onChange={handleChange} className="border p-2 w-full" />
      <input type="text" name="phone_number" placeholder="Phone Number" value={userData.phone_number} onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" name="createUser" className="bg-blue-500 text-white px-4 py-2 rounded">Create User</button>
      <button type="submit" name="editUser" className="bg-yellow-500 text-white px-4 py-2 rounded">Edit User</button>
      <button type="submit" name="terminateUser" className="bg-red-500 text-white px-4 py-2 rounded">Terminate User</button>
    </form>
  );
}

export default UserForm;
