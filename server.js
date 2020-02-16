const express = require('express');
const app = express();
const port = process.env.PORT || 4000;;
const path = require('path');
const render = require('./render.js');

let print = function() {
  let obj = {};
  Error.captureStackTrace(obj, print);
  let stackTop = obj.stack.split('\n')[1];
  console.log('\x1b[36m%s\x1b[0m', path.basename(stackTop).slice(0, -1));
  Object.values(arguments).forEach(el => console.log(JSON.stringify(el, null, '\t')));
}

app.use('/', express.static(path.join(__dirname, 'public')));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
