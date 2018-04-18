const directory = process.argv[2];
const extension = process.argv[3];
const filterFunc = require('./exercise6.js');

filterFunc(directory, extension, function(err, list) {
  if (err) {
    return (err);
  }

  list.forEach(function(file) {
    console.log(file);
  })
})
