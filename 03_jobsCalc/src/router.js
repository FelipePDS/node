const express = require('express');
const router = express.Router();

const path = require('path');
const pageFile = (file) => path.join(__dirname, 'views', file);

router.get('/', (request, response) => 
    response.sendFile(pageFile('index.html'))
);

router.get('/job', (request, response) => 
    response.sendFile(pageFile('job.html'))
);

router.get('/job/edit', (request, response) => 
    response.sendFile(pageFile('job-edit.html'))
);

router.get('/profile', (request, response) => 
    response.sendFile(pageFile('profile.html'))
);

module.exports = router;
