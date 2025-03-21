const loadData = require('./dataloader');
const sortStringsIgnoringSpaces = require('./sort');
const { createDirectory, writeFile } = require('./file');

const USERS_URL = 'https://jsonplaceholder.typicode.com/users';

async function main() {
  try {
    const { data, isLoading, error } = await loadData(USERS_URL);

    if (error) {
      console.error('Ошибка при загрузке данных:', error);
      return;
    }

    if (isLoading) {
      console.log('Данные еще загружаются');
      return;
    }

    const sortedUsers = sortStringsIgnoringSpaces(data.map(user => user.name));
    const emails = data.map(user => user.email);

    createDirectory('./users');
    writeFile('./users/names.txt', sortedUsers.join('\n'));
    writeFile('./users/emails.txt', emails.join('\n'));

    console.log('Данные успешно загружены и сохранены.');
  } catch (err) {
    console.error('Произошла ошибка:', err);
  }
}

main();
