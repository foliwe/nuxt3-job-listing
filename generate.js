module.exports = function(){
    const faker = require('faker');
    const _ = require("lodash");

    const jobTypes = ['Full Time', 'Part Time', 'Remote', 'Weekends'];
    const countries = ['USA', 'Canada', 'UK', 'Australia', 'Germany', 'France', 'Japan', 'India', 'China', 'Brazil'];

    const generateJob = (id) => {
        const shuffledJobTypes = faker.helpers.shuffle(jobTypes);
        const numberOfJobTypes = faker.datatype.number({ min: 1, max: 3 });
        const selectedJobTypes = shuffledJobTypes.slice(0, numberOfJobTypes);

        return {
            id,
            jobTitle: faker.name.jobTitle(),
            employer: faker.company.bs(),
            jobType: selectedJobTypes,
            jobDate: faker.date.recent(),
            jobSalaryStarts: faker.datatype.float({ min: 11000, max: 14000 }),
            jobSalaryEnds: faker.datatype.float({ min: 21000 , max: 60000}),
            description: faker.lorem.paragraphs(5),
            companyInfo: {
                address: faker.address.streetAddress(),
                Zip: faker.address.zipCode()
            }
        };
    };

    const generateReview = (id, jobId) => {
        return {
            id,
            job_id: jobId,
            rating: faker.datatype.number({ min: 1, max: 5 }),
            comment: faker.lorem.sentence()
        };
    };

    let jobId = 1;
    const jobs = _.times(50, () => generateJob(jobId++));
    let reviewId = 1;
    const reviews = _.flatMap(jobs, (job) => {
        const numReviews = faker.datatype.number({ min: 1, max: 10 });
        const jobReviews = _.times(numReviews, () => generateReview(reviewId++, job.id));
        return jobReviews;
    });

    return {
        jobs,
        countries: _.times(10, (n) => {
            return {
                id: n + 1,
                name: faker.helpers.randomize(countries),
                population: faker.datatype.number({ min: 1000000, max: 1000000000 }),
                capital: faker.address.city(),
                currency: faker.finance.currencyCode()
            };
        }),
        reviews
    };
};
