import mysql from 'mysql2/promise';

const db = await mysql.createConnection({
  port: 3306,
  host: 'localhost',
  user: 'root',
  password: 'test',
  database: 'porter_auth'
});

console.log('✅ MySQL connected successfully');
export default db;