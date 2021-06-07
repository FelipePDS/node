const Profile = require('../models/Profile');

class ProfileController {
    async edit(req, res) {
        const profile = new Profile();
        const profileData = await profile.get();

        return res.render('profile', { profile: profileData });
    };

    async update(req, res) {
        const newDatas = req.body;
        
        const profile = new Profile();
        await profile.update(newDatas);

        return res.redirect('/profile');
    };
};

module.exports = ProfileController;
