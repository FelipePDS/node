const { freemem, totalmem } = require('os'); // handles memory numbers on the device
const { log } = require('./02_logger');

setInterval(() => {
    const total = parseInt(totalmem() / 1024 / 1024);
    const mem = parseInt(freemem() / 1024 / 1024);
    const percents = parseInt((mem / total) * 100);

    const stats = {
        free: `${mem} MB`,
        total: `${total} MB`,
        usage: `${percents}%`
    };

    console.clear();
    console.log("---------------------- PC STATS ----------------------");
    console.table(stats);

    log(`${JSON.stringify(stats)}\n`);
}, 1000)