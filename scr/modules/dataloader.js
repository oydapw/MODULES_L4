const https = require('https');

function loadData(url) {
  let data = [];
  let isLoading = true;
  let error = null;

  return new Promise((resolve, reject) => {
    https.get(url, (resp) => {
      let responseData = '';

      resp.on('data', (chunk) => {
        responseData += chunk;
      });

      resp.on('end', () => {
        try {
          data = JSON.parse(responseData);
          isLoading = false;
          resolve({ data, isLoading, error });
        } catch (err) {
          error = err;
          isLoading = false;
          reject({ data, isLoading, error });
        }
      });

    }).on('error', (err) => {
      error = err;
      isLoading = false;
      reject({ data, isLoading, error });
    });
  });
}

module.exports = loadData;
