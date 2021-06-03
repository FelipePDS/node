const express = require('express');
const app = express();
const router = require('./router');

const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(router);

app.listen(port, () => 
    console.log(`Server running at http://localhost:${port}`)
);
