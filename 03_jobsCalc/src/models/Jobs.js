const ConnectionDatabase = require('../database/');

class Jobs { 
    async getAll() {
        const db = await ConnectionDatabase();

        const datas = await db.all(`SELECT * FROM jobs`);

        await db.close();

        return datas;
    };

    async getById(id) {
        const db = await ConnectionDatabase();

        const datas = await db.get(`SELECT * FROM jobs WHERE id = ${id}`);

        await db.close();

        return datas;
    };

    async save({ name, dailyHours, totalHours, createdAt, budget, remainingDays, status }) {
        const db = await ConnectionDatabase();

        await db.run(`
            INSERT INTO jobs (
                name, 
                dailyHours, 
                totalHours,
                createdAt,
                budget,
                remainingDays,
                status
            ) VALUES (
                "${name}", 
                ${dailyHours}, 
                ${totalHours},
                ${createdAt},
                ${budget},
                ${remainingDays},
                "${status}"
            )
        `);

        await db.close();
    };

    async update(id, { name, dailyHours, totalHours, createdAt, budget, remainingDays, status }) {
        const db = await ConnectionDatabase();

        await db.run(`
            UPDATE jobs SET
                name = "${name}",
                dailyHours = ${dailyHours}, 
                totalHours = ${totalHours},
                createdAt = ${createdAt},
                budget = ${budget},
                remainingDays = ${remainingDays},
                status = "${status}"
            WHERE id = ${id}
        `);

        await db.close();
    };

    async delete(id) {
        const db = await ConnectionDatabase();

        await db.run(`DELETE FROM jobs WHERE id = ${id}`);

        await db.close();
    };
};

module.exports = Jobs;
