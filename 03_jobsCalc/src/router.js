const express = require('express');
const router = express.Router();

const ProfileController = require('./controllers/ProfileController');

const profileController = new ProfileController();

const Jobs = {
    data: [
        {
            id: 1,
            name: "Pizzaria Guloso",
            dailyHours: 2,
            totalHours: 1,
            createdAt: Date.now(),
            budget: Number,
            remainingDays: Number,
            status: String
        },
        
        {
            id: 2,
            name: "OneTwo Project",
            dailyHours: 3,
            totalHours: 47,
            createdAt: Date.now(),
            budget: Number,
            remainingDays: Number,
            status: String
        }
    ],

    controllers: {
        show(req, res) {
            const jobs = Jobs.data.map(job => {
                job.remainingDays = Jobs.services.remainingDays(job);
                job.status = job.remainingDays <= 0 ? 'done' : 'progress';
                job.budget = Jobs.services.calculateBudget(job, Profile.data.hourlyValue);
        
                return job;
            });

            return res.render('index', { profile: Profile.data, jobs });
        },

        create(req, res) {
            return res.render('job');
        },

        save(req, res) {
            const { name, dailyHours, totalHours } = req.body;
            const id = (Jobs.data[Jobs.data.length - 1]?.id) || 1;

            Jobs.data.push({
                id,
                name,
                dailyHours,
                totalHours,
                createdAt: Date.now()
            });

            return res.redirect('/');
        },

        edit(req, res) {
            const { id } = req.params;

            const job = Jobs.data.find(job => Number(job.id) === Number(id));

            if (!job) return res.send('Job não encontrado');

            return res.render('job-edit', { job });
        },

        update(req, res) {
            const { id } = req.params;

            const { name, dailyHours, totalHours } = req.body;

            const job = Jobs.data.find(job => Number(job.id) === Number(id));

            if (!job) return res.send('Job não encontrado');

            job.name = name;
            job.dailyHours = dailyHours;
            job.totalHours = totalHours;

            return res.redirect(`/job/${id}`);
        },

        delete(req, res) {
            const { id } = req.params;

            const job = Jobs.data.find(job => Number(job.id) === Number(id));

            if (!job) return res.send('Job não encontrado');

            Jobs.data = Jobs.data.filter(job => Number(job.id) !== Number(id));

            return res.redirect(`/`);
        }
    },

    services: {
        remainingDays({ totalHours, dailyHours, createdAt }) {
            const remainingDays = (totalHours / dailyHours).toFixed();
        
            const createdDate = new Date(createdAt);
            const dueDay = createdDate.getDate() + Number(remainingDays);
            const dueDateInMs = createdDate.setDate(dueDay);
        
            const timeDiffInMs = dueDateInMs - Date.now();
        
            const dayInMs = 1000 * 60 * 60 * 24;
            const dayDiff = Math.floor(timeDiffInMs / dayInMs);
        
            return dayDiff;
        },

        calculateBudget({ totalHours }, hourlyValue) {
            return hourlyValue * totalHours;
        }
    }
};

router.get('/', Jobs.controllers.show);

router.get('/job', Jobs.controllers.create);
router.post('/job', Jobs.controllers.save);

router.get('/job/:id', Jobs.controllers.edit);
router.post('/job/:id', Jobs.controllers.update);

router.post('/job/delete/:id', Jobs.controllers.delete);

router.get('/profile', profileController.edit);
router.post('/profile', profileController.update);

module.exports = router;
