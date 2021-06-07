const Jobs = require('../models/Jobs');
const Profile = require('../models/Profile');

const { calculateRemainingDays, defineStatus, calculateBudget } = require('../utils/jobUtils');

class JobsController {
    create(req, res) {
        return res.render('job');
    };

    async save(req, res) {
        const datas = req.body;

        const jobDataPrototype = {
            ...datas,
            createdAt: Date.now()
        };

        const profile = new Profile();
        const profileDatas = await profile.get();

        const remainingDays = calculateRemainingDays(jobDataPrototype);
        const status = defineStatus(jobDataPrototype);
        const budget = calculateBudget(jobDataPrototype, profileDatas.hourlyValue);

        const jobData = {
            ...jobDataPrototype,
            remainingDays,
            status,
            budget
        };

        const jobs = new Jobs();
        await jobs.save(jobData);

        return res.redirect('/');
    };

    async edit(req, res) {
        const { id } = req.params;

        const jobs = new Jobs();
        const jobData = await jobs.getById(id);

        if (!jobData) return res.send('Job não encontrado');

        return res.render('job-edit', { job: jobData });
    };

    async update(req, res) {
        const { id } = req.params;
        const newDatas = req.body;

        const jobs = new Jobs();
        const job = await jobs.getById(id);
        const createdAt = job.createdAt;

        const jobDataPrototype = {
            ...newDatas,
            createdAt
        };

        const profile = new Profile();
        const profileDatas = await profile.get();

        const remainingDays = calculateRemainingDays(jobDataPrototype);
        const status = defineStatus(jobDataPrototype);
        const budget = calculateBudget(jobDataPrototype, profileDatas.hourlyValue);

        const newJobData = {
            ...jobDataPrototype,
            remainingDays,
            status,
            budget
        };

        await jobs.update(id, newJobData);

        return res.redirect(`/job/${id}`);
    };

    async delete(req, res) {
        const { id } = req.params;
        
        const jobs = new Jobs();
        await jobs.delete(id);

        return res.redirect(`/`);
    };
};

module.exports = JobsController;
