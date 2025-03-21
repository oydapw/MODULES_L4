require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });
console.log(`Текущий режим работы: ${process.env.MODE}`);
