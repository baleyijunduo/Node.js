const path = require('path');

const fpath = '/c/d/index.html';
fpath = path.extname(fpath);
console.log(fpath);