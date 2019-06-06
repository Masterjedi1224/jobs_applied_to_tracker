import React from 'react';
import DisplayJob from '../components/DIsplay.Job.jsx';
import Toast from "../components/Toast";


export default class DisplayJobsAppliedTo extends React.Component {
    constructor(){
        super();

        this.state = { jobs_applied_to: [], showToast: false, toastMessage:'' };
        this.deleteJobAppliedTo = this.deleteJobAppliedTo.bind(this);
        this.onDissmiss = this.onDissmiss.bind(this);
        this.retrieveJobsAppliedTo = this.retrieveJobsAppliedTo.bind(this);
    }

    componentDidMount() {
        this.retrieveJobsAppliedTo();
    }

    retrieveJobsAppliedTo(){
        fetch('/api/jobs_applied_to/').then(response => {
            if (response.ok) {
                response.json().then(data => {
                    data.records.forEach(job_appied_to => {
                        job_appied_to.created = new Date(job_appied_to.created).toLocaleDateString();
                    });

                    this.setState({ jobs_applied_to: data.records  });
                });

            }
        });
    }

    onDissmiss(){
        this.setState({ showToast: false, job_appied_to: [] });
        this.retrieveJobsAppliedTo();
    }

    deleteJobAppliedTo(company,id){
        console.log('Time to delete me!: '+id);
        const r = window.confirm("Are you sure you want to remove: "+company+"?");
        if(r == true){
            fetch('/api/jobs_applied_to/'+id,
                {
                    method: "DELETE"
                }).then(response => {
                    if(response.ok){
                        this.setState({ toastMessage: `You have successfully removed: ${company}`,showToast: true  });
                    }

            }).catch(err =>{
                console.log('There was a problem trying to remove: '+company,err.message);
            })
            console.log('Time to remove: '+company);
        }
    }


    render(){
        const jobAppliedTo = this.state.jobs_applied_to.map(job_applied_to =><DisplayJob key={job_applied_to._id} job_applied_to={job_applied_to} deleteJob={this.deleteJobAppliedTo} />);
        return(
            <div>
                <Toast onDismiss={this.onDissmiss} showing={this.state.showToast} alert_class="success" message={this.state.toastMessage} />
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>
                                Company
                            </th>
                            <th>
                                Position
                            </th>
                            <th>
                                City
                            </th>
                            <th>
                                State
                            </th>
                            <th>
                                Date Applied
                            </th>
                            <th style={{width: 232}}>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobAppliedTo}
                    </tbody>
                </table>
            </div>
        );

    }
}