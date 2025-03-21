const fs = require('fs');
const path = require('path');

function createDirectory(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeFile(filePath, content) {
  fs.writeFileSync(filePath, content);
}

module.exports = {
  createDirectory,
  writeFile
};
