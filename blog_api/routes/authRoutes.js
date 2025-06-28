import express from 'express';
import db from '../db.js'; 
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const [existingUser] = await db.execute(
      'SELECT * FROM users WHERE username = ? OR email = ?',
      [username, email]
    );
    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'Username or email already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10); 
    await db.execute(
      'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, hashedPassword]
    );
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
});
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [userRows] = await db.execute(
            'SELECT * FROM users WHERE username = ?',[username]
        );
        const user = userRows[0];
         if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }
    const token = jwt.sign(
      { user_id: user.id, username: user.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
     console.log('Generated Token:', token);
    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
});
export default router;
