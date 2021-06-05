class Jobs { 
    datas = [
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
    ];

    save(datas) {
        this.datas.push(datas);
    };

    update(job, newData) {
        Object.keys(newData).map(key => {
            job[key] = newData[key];
        });
    };

    delete(id) {
        this.datas = this.datas.filter(job => Number(job.id) !== Number(id));
    };
};

module.exports = Jobs;
