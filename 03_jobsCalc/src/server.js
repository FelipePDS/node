const express = require('express');
const app = express();

const router = require('./router');
const path = require('path');

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => 
    console.log(`Server running at http://localhost:${port}`)
);
