const bcrypt = require('bcryptjs');
require('dotenv').config();

const passwords = [
    'pass34523',
    '1299alskmdoa',
    'qqq2384014',
    '123456789',
    'qwertyuiop',
    'pflsp[fdf',
    'admin123',
    'midl123',
    'passlolwwWW!',
    'mypassword',
    '12345631231231',
    'test123',
    'test44444'
  ];

const Round = 10;

passwords.forEach((password, index) => {
  console.time(`hashTime ${index + 1}`);
  const hash = bcrypt.hashSync(password, Round);
  console.timeEnd(`hashTime ${index + 1}`);
  console.log(`Хеш пароля ${index + 1}: ${hash}`);
});

console.log(`Режим работы: ${process.env.MODE}`);