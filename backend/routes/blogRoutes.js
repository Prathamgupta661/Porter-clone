import express from 'express';
import db from '../db.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();
router.post('/', verifyToken, async (req, res) => {
  const { title, content, author } = req.body;
  const user_id = req.user.user_id; 
  try {
    await db.execute(
      'INSERT INTO blogs (title, content, author, user_id) VALUES (?, ?, ?, ?)',
      [title, content, author, user_id]
    );
    res.status(201).json({ message: 'Blog post created' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/', async (req, res) => {
  const [blog] = await db.execute('SELECT * FROM blogs');
  res.json(blog);
});
router.get('/:id', async (req, res) => {
  const [rows] = await db.execute('SELECT * FROM blogs WHERE id = ?', [req.params.id]);
  if (!rows.length) return res.status(404).json({ message: 'Post not found' });
  if (rows[0].user_id !== user_id) return res.status(403).json({ message: 'Not allowed' });
  res.json(rows[0]);
});
router.put('/:id', verifyToken, async (req, res) => {
  const { title, content } = req.body;
  try {
    await db.execute(
      'UPDATE blogs SET title = ?, content = ? WHERE id = ?',
      [title, content, req.params.id]
    );
    res.json({ message: 'Blog updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    await db.execute('DELETE FROM blogs WHERE id = ?', [req.params.id]);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.get('/filter/date', async (req, res) => {
  const { on, before, after, start, end } = req.query;

  let sql = 'SELECT * FROM blogs WHERE 1=1';
  const params = [];

  if (on) {
    sql += ' AND DATE(created_at) = ?';
    params.push(on);
  }
  if (before) {
    sql += ' AND DATE(created_at) < ?';
    params.push(before);
  }
  if (after) {
    sql += ' AND DATE(created_at) > ?';
    params.push(after);
  }
  if (start && end) {
    sql += ' AND DATE(created_at) BETWEEN ? AND ?';
    params.push(start, end);
  }

  try {
    const [rows] = await db.execute(sql, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
