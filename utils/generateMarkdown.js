const fs = require('fs');


const writeMarkdown = markdownContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readme.md', markdownContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: 'file created'
      });
    });
  });

};

module.exports = writeMarkdown;

