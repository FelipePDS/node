const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');

const port = 3333;
const hostname = '127.0.0.1';

const data = require('./urls.json');

function writeFile(callback) {
    fs.writeFile(
        path.join(__dirname, 'urls.json'), 
        JSON.stringify(data, null, 2),
        err => {
            if (err) throw err;

            callback(JSON.stringify({ message: "okok" }));
        }
    )
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*'
    });

    const { name, url, del } = URL.parse(req.url, true).query;

    if (!name || !url)
        return res.end(JSON.stringify(data, null, 2));
    
    if (del) {
        data.urls = data.urls.filter(
            item => String(item.url) !== String(url)
        );

        return writeFile(message => res.end(message));
    }
        
    const urlAlreadyExists = data.urls.filter(
        item => item.url == url && item.name == name
    );

    if (urlAlreadyExists.length > 0) {
        return res.end(JSON.stringify({ message: "URL already exists!" }));
    } else {
        data.urls.push({ name, url });
    }

    return writeFile((message) => res.end(message));
});

server.listen(port, hostname, () => { 
    console.log(`API running at http://${hostname}:${port}/`);
});