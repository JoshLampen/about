const express = require('express');
const app = express();

app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(8080, () => {
  console.log('listening...');
});