module.exports = {
    calculateHourlyValue({ monthlyBudget, hoursPerDay, daysPerWeek, vacationPerYear }) {
        const weeksPerYear = 52;
        const weeksPerMonth = (weeksPerYear - vacationPerYear) / 12;
        const weekTotalHours = hoursPerDay * daysPerWeek;

        const monthlyTotalHours = weeksPerMonth * weekTotalHours;

        const hourlyValue = monthlyBudget / monthlyTotalHours;

        return hourlyValue;
    }
};
