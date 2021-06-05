const { jobs } = require('./JobsController');
const { profile } = require('./ProfileController');

const { calculateBudget, remainingDays } = require('../utils/jobUtils');

class DashboardController {
    show(req, res) {
        jobs.datas.map(job => {
            job.remainingDays = remainingDays(job);
            job.status = job.remainingDays <= 0 ? 'done' : 'progress';
            job.budget = calculateBudget(job, profile.hourlyValue);

            return job;
        });

        const jobInformation = {
            total: jobs.datas.length,

            totalInProgress: jobs.datas.filter(job => job.status === 'progress').length,

            totalsDone: jobs.datas.filter(job => job.status === 'done').length
        };

        let freeHoursInTheDay = Number(profile.hoursPerDay);
        jobs.datas.filter(job => {
            job.status === 'progress' ? freeHoursInTheDay -= Number(job.dailyHours) : null;
        });

        return res.render('index', { profile, jobs: jobs.datas, jobInformation, freeHoursInTheDay });
    };
};

module.exports = DashboardController;
