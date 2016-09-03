const express = require('express');
const bodyParser = require('body-parser');
const upload = require('multer')({})

const app = express();

app.use('/', express.static('./public'));
app.use(bodyParser.urlencoded({ extended: true }));

['get', 'post', 'put', 'delete'].forEach(method =>
    app[method]('/register', upload.array(), (req, res) => {
        console.log(`${req.method} ${Date()}: recieved:
            ${JSON.stringify(req.body, null, '\t')}
        `)
        setTimeout(
            () => res.status(200).set('Content-Type', 'text/plain').send("request recieved").end(),
            1000
        );
    })
);

const server = app.listen(8080, 'localhost', () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});
