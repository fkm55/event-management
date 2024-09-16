import express from 'express';
import { registerUser, loginUser } from '../controllers/authController.js';



const router = express.Router();

// User registration
router.post('/register', registerUser);

// User login
router.post('/login', loginUser);

router.post('/', async (req, res) => {
    const { username, email, password, first_name, last_name, gender, date_of_birth, phone_number } = req.body;

    try {
        const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            first_name,
            last_name,
            gender,
            date_of_birth,
            phone_number,
        });

        await newUser.save();
        res.status(201).json({ message: 'Account created successfully.' });
    } catch (error) {
        res.status(400).json({ message: 'Error creating account.', error });
    }
});

// Edit User
router.put('/', async (req, res) => {
    const { username, email, password, first_name, last_name, gender, date_of_birth, phone_number } = req.body;

    try {
        const updates = {
            email: email || undefined,
            password: password ? await bcrypt.hash(password, 10) : undefined,
            first_name: first_name || undefined,
            last_name: last_name || undefined,
            gender: gender || undefined,
            date_of_birth: date_of_birth || undefined,
            phone_number: phone_number || undefined,
        };

        const result = await User.updateOne({ username }, { $set: updates });
        if (result.nModified) {
            res.json({ message: 'Account updated successfully.' });
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error updating account.', error });
    }
});

// Terminate User
router.delete('/', async (req, res) => {
    const { username } = req.body;

    try {
        const result = await User.updateOne({ username }, { $set: { status: 0 } });
        if (result.nModified) {
            res.json({ message: 'Account terminated successfully.' });
        } else {
            res.status(404).json({ message: 'User not found.' });
        }
    } catch (error) {
        res.status(400).json({ message: 'Error terminating account.', error });
    }
});

export default router;
