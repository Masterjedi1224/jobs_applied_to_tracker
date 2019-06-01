let Mongoose = require('Mongoose');

Mongoose.connect('mongodb://localhost/jobs_applied_to_tracker', { useNewUrlParser: true });
Mongoose.set('useFindAndModify', false);

let JobsAppliedToSchcema = new Mongoose.Schema({
    id: Number,
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    company_link: String,
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: true
    },
    job_requirements: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    interviews: Array,
    created: Date,
    comments: String
});

module.exports =  Mongoose.model('JobsAppliedTo', JobsAppliedToSchcema);