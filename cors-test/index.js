const express = require('express');
const app = express();
const cors = require('express-cors');


app.options('/', cors({ origin: 'https://null.jsbin.com', methods: ['DELETE'] }));
app.get('/', cors(), (req, res) => res.json({ message: 'Hello World!'}));

app.listen(3000, () => console.log('Example app listening on port 3000!'));