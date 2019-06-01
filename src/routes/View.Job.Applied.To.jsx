import React from 'react';
import DisplayJobAppliedTo from '../components/Display.Job.Applied.To';

export default class ViewJobAppliedTo extends React.Component {
    constructor(){
        super();

        this.state = { job_applied_to: [] };
    }


    componentDidMount(){
        fetch('/api/jobs_applied_to/'+this.props.location.state.id).then(response => {
           if(response.ok){
               response.json().then(data => {
                   data[0].created = new Date(data[0].created).toDateString();
                   this.setState({ job_applied_to: data[0]  });
               })
           }
        }).catch(err =>{
            console.log("There was an error trying to get the Job Applied To: ",err.message);
        })
    }

    render(){
        const jobAppliedTo = this.state.job_applied_to;

        return(
            <div id="view-job-applied-to" className="card">
                <div className="card-header">
                    {jobAppliedTo.company}
                </div>
                <div id="view-job-applied-to-desc">
                    <DisplayJobAppliedTo label="Applied On" value={jobAppliedTo.created} type="text" />
                    <DisplayJobAppliedTo label="Status" value={jobAppliedTo.status} type="text" />
                    <DisplayJobAppliedTo label="Company Link" value={jobAppliedTo.company_link} type="text" />
                    <DisplayJobAppliedTo label="Position" value={jobAppliedTo.position} type="text" />
                    <DisplayJobAppliedTo label="City" value={jobAppliedTo.city} type="text" />
                    <DisplayJobAppliedTo label="State" value={jobAppliedTo.state} type="text" />
                    <DisplayJobAppliedTo label="Job Description" value={jobAppliedTo.job_description} type="desc" />
                    <DisplayJobAppliedTo label="Job Requirements" value={jobAppliedTo.job_requirements} type="desc" />
                    <DisplayJobAppliedTo label="Comments" value={jobAppliedTo.comments} type="desc" />
                </div>

            </div>
        );
    }

}