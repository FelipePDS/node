const ConnectDatabase = require('../');

class CreateProfile {
    async up() {
        const db = await ConnectDatabase();

        await db.exec(`
            CREATE TABLE profile (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                avatar TEXT,
                monthlyBudget INT,
                hoursPerDay INT,
                daysPerWeek INT,
                vacationPerYear INT,
                hourlyValue INT
            );
        `);

        await db.run(`
            INSERT INTO profile (
                name,
                avatar,
                monthlyBudget,
                hoursPerDay,
                daysPerWeek,
                vacationPerYear
            ) VALUES (
                "Felipe",
                "https://avatars.githubusercontent.com/u/64941387?v=4",
                3000,
                5,
                5,
                4
            );
        `);

        await db.close();
    }
};

const createProfile = new CreateProfile();
createProfile.up();
