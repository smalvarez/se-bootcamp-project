// functions/signup.js
const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'your-hostinger-database-host',
  user: 'u688440464_sqladmin',
  password: 'Dbpassword9!',
  database: 'u688440464_login_db'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database.');
  }
});

exports.handler = async (event, context) => {
  const { email, password } = JSON.parse(event.body);

  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO users (email, password) VALUES (?, ?)';
    db.query(query, [email, password], (err, result) => {
      if (err) {
        reject({
          statusCode: 500,
          body: JSON.stringify({ message: 'Database error', error: err }),
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ message: 'User registered successfully' }),
        });
      }
    });
  });
};
