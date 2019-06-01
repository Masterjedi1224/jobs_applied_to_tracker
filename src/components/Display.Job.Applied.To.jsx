import React from 'react';

export default class DisplayJobAppliedTo extends React.Component {
    render(){
        return(
            <div>
            {
                this.props.type === 'text' ?

                    <div className="view-rows">
                        <div className="pull-left">
                            <strong>
                                {this.props.label}:
                            </strong>
                        </div>
                        <div className="pull-right">
                            {this.props.value}
                        </div>
                        <br clear="all"/>
                    </div>
                    :
                    <div className="card">
                        <div className="card-header">
                            {this.props.label}
                        </div>
                        <div className="card-body">
                            {this.props.value}
                        </div>
                    </div>

            }
            </div>
        );
    }
}