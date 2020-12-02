const fs = require('fs');
const express = require('express');
let app = express();
const router = require('./router/main')(app);

let port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use('/public', express.static('public'));

let server = app.listen(port, () => {
  console.log(`Server on : ${port}`);
})