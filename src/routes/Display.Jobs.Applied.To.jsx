import React from 'react';
import DisplayJob from '../components/DIsplay.Job.jsx';


export default class DisplayJobsAppliedTo extends React.Component {
    constructor(){
        super();

        this.state = { jobs_applied_to: [] };
    }

    componentDidMount() {
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


    render(){
        const jobAppliedTo = this.state.jobs_applied_to.map(job_applied_to =><DisplayJob key={job_applied_to._id} job_applied_to={job_applied_to} />);
        return(
            <div>
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