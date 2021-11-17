const request = require('request');
const fs = require('fs');

const args = process.argv.splice(2);

request(args[0], (error, statusCode, body) => {
  fs.writeFile(args[1], body, () => {
    if (error) {
      return console.log(error);
    }
    console.log(`Downloaded and save ${statusCode.headers["content-length"]} to ${args[1]}`);
  });
});