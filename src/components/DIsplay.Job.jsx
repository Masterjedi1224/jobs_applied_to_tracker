import React from 'react';
import {Link} from 'react-router-dom';

export default class DisplayJob extends React.Component {

    constructor(){
        super();

        this.removeJob = this.removeJob.bind(this);
    }

    removeJob(e){
        e.preventDefault();
        this.props.deleteJob(this.props.job_applied_to.company,this.props.job_applied_to._id);
    }

    render(){
        return(
            <tr>
                <td>
                    <strong>
                        {this.props.job_applied_to.company}
                    </strong>
                </td>
                <td>
                    <strong>
                        {this.props.job_applied_to.position}
                    </strong>
                </td>
                <td>
                    <strong>
                        {this.props.job_applied_to.city}
                    </strong>
                </td>
                <td>
                    <strong>
                        {this.props.job_applied_to.state}
                    </strong>
                </td>
                <td>
                    <strong>{this.props.job_applied_to.created}</strong>
                </td>
                <td style={{width: 232}}>
                    <button className="btn btn-sm btn-outline-success"><i className="fas fa-user-friends"></i></button>
                    <Link to={{
                        pathname: `/edit_job/${this.props.job_applied_to._id}`,
                        state: {
                            id: this.props.job_applied_to._id
                        }
                    }} className="btn btn-outline-dark btn-sm"><i className="fas fa-edit"></i></Link>
                    <Link to={{
                        pathname: `/view_job/${this.props.job_applied_to._id}`,
                        state: {
                            id: this.props.job_applied_to._id
                        }
                    }} className="btn btn-sm btn-outline-primary"><i className="fas fa-eye"></i></Link>
                    <button className="btn btn-sm btn-outline-warning"><i className="fas fa-bolt"></i></button>
                    <button className="btn btn-sm btn-danger" onClick={this.removeJob}><i className="fas fa-trash-alt"></i></button>
                </td>
            </tr>
        );
    }
}