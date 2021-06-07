const Jobs = require('../models/Jobs');
const Profile = require('../models/Profile');

class DashboardController {
    async show(req, res) {
        const jobs = new Jobs();
        const jobsDatas = await jobs.getAll();

        const profile = new Profile();
        const profileDatas = await profile.get();

        const jobInformation = {
            total: jobsDatas.length,

            totalInProgress: jobsDatas.filter(job => job.status === 'progress').length,

            totalsDone: jobsDatas.filter(job => job.status === 'done').length
        };

        let freeHoursInTheDay = Number(profileDatas.hoursPerDay);
        jobsDatas.filter(job => {
            job.status === 'progress' ? freeHoursInTheDay -= Number(job.dailyHours) : null;
        });

        return res.render('index', { jobs: jobsDatas, profile: profileDatas, jobInformation, freeHoursInTheDay });
    };
};

module.exports = DashboardController;
