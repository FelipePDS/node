const { freemem, totalmem } = require('os'); // lida com números de memória no dispositivo

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
}, 1000)