module.exports = {
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
};
