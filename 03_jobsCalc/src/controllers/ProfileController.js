const Profile = require('../models/Profile');
const profile = new Profile();

const { calculateHourlyValue } = require('../utils/profileUtils');

class ProfileController {
    edit(req, res) {
        return res.render('profile', { profile });
    };

    update(req, res) {
        const datas = req.body;

        const hourlyValue = calculateHourlyValue(datas);

        profile.update(profile, {
            ...datas,
            hourlyValue
        });

        return res.redirect('/profile');
    };
};

module.exports = { ProfileController, profile };
