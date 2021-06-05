const Jobs = require('../models/Jobs');
const jobs = new Jobs();

class JobsController {
    create(req, res) {
        return res.render('job');
    };

    save(req, res) {
        const { name, dailyHours, totalHours } = req.body;
        const id = (jobs.datas[jobs.datas.length - 1]?.id) + 1 || 1;

        const datas = {
            id,
            name,
            dailyHours,
            totalHours,
            createdAt: Date.now()
        };

        jobs.save(datas);

        return res.redirect('/');
    };

    edit(req, res) {
        const { id } = req.params;

        const job = jobs.datas.find(job => Number(job.id) === Number(id));

        if (!job) return res.send('Job não encontrado');

        return res.render('job-edit', { job });
    };

    update(req, res) {
        const { id } = req.params;
        const datas = req.body;

        const job = jobs.datas.find(job => Number(job.id) === Number(id));

        if (!job) return res.send('Job não encontrado');

        jobs.update(job, datas);

        return res.redirect(`/job/${id}`);
    };

    delete(req, res) {
        const { id } = req.params;

        const job = jobs.datas.find(job => Number(job.id) === Number(id));

        if (!job) return res.send('Job não encontrado');

        jobs.delete(id);

        return res.redirect(`/`);
    };
};

module.exports = { JobsController, jobs };
