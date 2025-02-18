import { openDB } from '../../../lib/db';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const db = await openDB();
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const token = authorization.split(' ')[1];

  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    const { description, amount, date, type } = req.body;

    await db.run('INSERT INTO expenses (user_id, description, amount, date, type) VALUES (?, ?, ?, ?, ?)', [
      decoded.id,
      description,
      amount,
      date,
      type,
    ]);

    res.status(200).json({ message: 'Expense added successfully' });
  } catch (error) {
    res.status(401).json({ message: 'Unauthorized' });
  }
}