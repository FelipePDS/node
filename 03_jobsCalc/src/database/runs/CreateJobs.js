const ConnectDatabase = require('../');

class CreateJobs {
    async up() {
        const db = await ConnectDatabase();

        await db.exec(`
            CREATE TABLE jobs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                dailyHours INT,
                totalHours INT,
                createdAt DATETIME,
                budget INT,
                remainingDays INT,
                status TEXT
            );
        `);

        await db.run(`
            INSERT INTO jobs (
                name,
                dailyHours,
                totalHours,
                createdAt
            ) VALUES (
                "Pizzaria Guloso",
                2,
                1,
                1617514376018
            );
        `);

        await db.run(`
            INSERT INTO jobs (
                name,
                dailyHours,
                totalHours,
                createdAt
            ) VALUES (
                "OneTwo Project",
                3,
                47,
                1617514376288
            );
        `);

        await db.close();
    }
};

const createJobs = new CreateJobs();
createJobs.up();
