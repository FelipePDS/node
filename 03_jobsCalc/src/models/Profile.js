const { calculateHourlyValue } = require('../utils/profileUtils');

class Profile {
    constructor() {
        const datas = { 
            monthlyBudget: this.monthlyBudget,
            hoursPerDay: this.hoursPerDay,
            daysPerWeek: this.daysPerWeek,
            vacationPerYear: this.vacationPerYear
        };

        this.hourlyValue = calculateHourlyValue(datas);
    };

    name = 'Felipe';
    avatar = 'https://avatars.githubusercontent.com/u/64941387?v=4';
    monthlyBudget = 3000;
    hoursPerDay = 5;
    daysPerWeek = 5;
    vacationPerYear = 4;
    hourlyValue = Number;

    update(profile, newData) {
        Object.keys(profile).map(key => {
            profile[key] = newData[key];
        });
    };
};

module.exports = Profile;
