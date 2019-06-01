'use strict';

const express = require('express');

const JobsAppliedToModel = require('../models/Job.Applied.To.Model.js');
const router = express.Router();

router.post("/api/jobs_applied_to/", (req,res) => {
    if(!req.body){
        return res.status(400).send('Request body is empty');
    }
    req.body.created = new Date();

    let model = new JobsAppliedToModel(req.body);
    model.save().then( doc => {
        if(!doc || doc.length === 0){
            return res.status(500).send(doc);
        }

        res.status(201).send(doc);
    }).catch(err => {
        res.status(500).json(err);
    });
});

router.get('/api/jobs_applied_to', (req,res) =>{
    JobsAppliedToModel.find().then(docs => {
        const metaData = { total_count: docs.length};
        res.json({_meta_data: metaData, records: docs});
    }).catch(error => {
        console.log(error);
        res.status(500).json({
            message: `Internal Server Error: ${error}`
        });
    });
});

router.get('/api/jobs_applied_to/:id', (req,res) => {
    JobsAppliedToModel.find({
        _id: req.params.id
    }).then( doc => {
        res.json(doc);
    }).catch(err => {
        res.status(500).send(`Error Retrieving Job Applied to: ${err.message}`);
    });
});

router.put('/api/jobs_applied_to/:id', (req,res) => {
    if(!req.params.id){
        return res.status(400).send('Missing field id');
    }

    JobsAppliedToModel.findOneAndUpdate({
            _id: req.params.id
        },

        req.body,{
            new: true
        }).then( doc => {
        res.json(doc);
    }).catch(err =>{
        res.status(500).json(err);
    });
});

router.delete('/api/jobs_applied_to', (req,res) => {
    if(!req.query.id){
        return res.status(400).send("Missing Parameter: id");
    }

    JobsAppliedToModel.deleteOne({
        _id: req.query.id
    }).then(doc => {
        res.json(doc);
    }).catch(err =>{
        res.status(500).json(err);
    });

});

module.exports = router;