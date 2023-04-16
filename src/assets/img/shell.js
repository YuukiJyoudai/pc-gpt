const fs = require('fs');
const path = require('path');

const directoryPath = './'; // 指定文件夹路径

let count = 1;
fs.readdir(directoryPath, (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    if (path.extname(file).toLowerCase() === '.jpg') { // 只处理jpg图片
      const oldPath = path.join(directoryPath, file);
      const newPath = path.join(directoryPath, count.toString() + '.jpg');
      fs.renameSync(oldPath, newPath);
      count++;
    }
  });
});