const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const JobsAppliedToRoute = require('./api_routes/Jobs.AppliedTo.Route.js');

app.use(bodyParser.json());

app.use((req,res,next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body);
    next();
});

app.use(JobsAppliedToRoute);


app.listen(port, () => { console.log(`Started on Port ${port}`)});


