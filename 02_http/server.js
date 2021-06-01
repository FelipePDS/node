const http = require('http');

const fs = require('fs');
const path = require('path');

const port = 3000;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    const pageFile = req.url === '/' ? 'index.html' : req.url;
    const pageFilePath = path.join(__dirname, 'public', pageFile);
    const extname = path.extname(pageFilePath);

    const allowedFilesTypes = ['.html', '.css', '.js'];
    const allowed = allowedFilesTypes.find(item => 
        item == extname
    );

    if (!allowed) return;

    fs.readFile(
        pageFilePath,
        (err, content) => {
            if (err) throw err;

            res.end(content);
        }
    );
});

server.listen(port, hostname, () => { 
    console.log(`Server running at http://${hostname}:${port}/`);
});