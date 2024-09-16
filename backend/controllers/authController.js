import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Register User
export const registerUser = async (req, res) => {
  console.log(req.body.userData)
  const {
        fname,
        email,
        lname,
        username,
        password,
        gender,
        date_of_birth,
        phone_number,
  } = req.body.userData?req.body.userData:req.body

  try {
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      fname,
        email,
        lname,
        username,
        password,
        gender,
        date_of_birth,
        phone_number,
    });
    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.log(err.message)
    res.status(400).json({ message: 'Error registering user', error: err });
  }
};

// Login User with Username
export const loginUser = async (req, res) => {
  console.log()
  const { username, password } = req.body; // Use username instead of email

  try {
    // Find user by username
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Compare the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.json({ message: 'Invalid credentials' });

    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    

    // Send the token and user info as response
    return res.json({ token, user: { username: user.username, role: user.role } });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err });
  }
};
