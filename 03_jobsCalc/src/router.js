const express = require('express');
const router = express.Router();

const ProfileController = require('./controllers/ProfileController');
const JobsController = require('./controllers/JobsController');
const DashboardController = require('./controllers/DashboardController');

const profileController = new ProfileController();
const jobsController = new JobsController();
const dashboardController = new DashboardController();

router.get('/', dashboardController.show);

router.get('/job', jobsController.create);
router.post('/job', jobsController.save);

router.get('/job/:id', jobsController.edit);
router.post('/job/:id', jobsController.update);

router.post('/job/delete/:id', jobsController.delete);

router.get('/profile', profileController.edit);
router.post('/profile', profileController.update);

module.exports = router;
