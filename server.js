const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use('/', express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/register', (req, res) => {
  console.log(`${Date()}: recieved:
    ${JSON.stringify(req.body, null, '\t')}
  `)
  res.status(200).set('Content-Type', 'text/plain').send("request recieved").end();
});

const server = app.listen(8080, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
