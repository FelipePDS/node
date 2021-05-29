const EventEmitter = require("events"); // nodejs events
const fs = require('fs'); // nodejs file system
const path = require('path'); // nodejs directory path

const emitter = new EventEmitter();

emitter.on('log', (message) => {
    const logPath = path.join(__dirname, '02_log.txt');
    fs.appendFile(logPath, message, err => {
        if (err) throw err;
    })
})

function log(message) {
    emitter.emit('log', message);
}

module.exports = { log };