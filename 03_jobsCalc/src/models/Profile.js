const ConnectionDatabase = require('../database/');

const { calculateHourlyValue } = require('../utils/profileUtils');

class Profile {
    constructor() {
        const datas = ConnectionDatabase().then(db => 
            db.get(`SELECT * FROM profile`)
        );

        datas.then(datas => calculateHourlyValue(datas))
        .then(hourlyValue => {
            ConnectionDatabase()
            .then(db => {
                datas.then(datas => {
                    if (!datas.hourlyValue) {
                        db.run(`UPDATE profile SET hourlyValue = ${hourlyValue}`);
                    };
                });
            });
        })
        .then(() => 
            ConnectionDatabase().then(db => db.close())
        );
    };

    async get() {
        const db = await ConnectionDatabase();

        const datas = await db.get(`SELECT * FROM profile`);

        await db.close();

        return datas;
    };

    async update({ name, avatar, monthlyBudget, hoursPerDay, daysPerWeek, vacationPerYear }) {
        const db = await ConnectionDatabase();

        const datas = {
            monthlyBudget,
            hoursPerDay,
            daysPerWeek,
            vacationPerYear
        };

        const hourlyValue = calculateHourlyValue(datas);

        await db.run(`
            UPDATE profile SET
                name = "${name}",
                avatar = "${avatar}",
                monthlyBudget = ${monthlyBudget},
                hoursPerDay = ${hoursPerDay},
                daysPerWeek = ${daysPerWeek},
                vacationPerYear = ${vacationPerYear},
                hourlyValue = ${hourlyValue}
        `);

        await db.close();
    };
};

module.exports = Profile;
