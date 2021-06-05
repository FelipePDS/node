const Profile = require('../models/Profile');
const profile = new Profile();

class ProfileController {
    edit(req, res) {
        return res.render('profile', { profile });
    };

    update(req, res) {
        const data = req.body;

        const weeksPerYear = 52;
        const weeksPerMonth = (weeksPerYear - data.vacationPerYear) / 12;
        const weekTotalHours = data.hoursPerDay * data.daysPerWeek;

        const monthlyTotalHours = weeksPerMonth * weekTotalHours;

        const hourlyValue = data.monthlyBudget / monthlyTotalHours;

        profile.update(profile, {
            ...data,
            hourlyValue
        });

        return res.redirect('/profile');
    };
};

module.exports = ProfileController;
