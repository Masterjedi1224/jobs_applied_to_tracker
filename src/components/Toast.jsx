import React from 'react';
import {Alert, Collapse} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default class Toast extends React.Component {
    componentDidUpdate(){
        if(this.props.showing){
            clearTimeout(this.dismissTimer);
            this.dismissTimer =setTimeout(this.props.onDismiss,5000);
        }
    }

    componentWillUnmount(){
        clearTimeout(this.dismissTimer);
    }

    render(){
        const alert_class = this.props.alert_class;

        return(
            <div className="container">
                <Collapse in={this.props.showing}>
                    <div style={{position: 'fixed', top: 100, left: 0, right: 0, textAlign: 'center'}}>
                        <div className={"alert alert-"+alert_class}>
                            {this.props.message}
                        </div>
                    </div>
                </Collapse>
            </div>

        );
    }
}

Toast.propTypes = {
    showing: PropTypes.bool.isRequired,
        onDismiss: PropTypes.func.isRequired,
        bsStyle: PropTypes.string,
        message: PropTypes.any.isRequired
};

Toast.defaultProps = {
    bsStyle: 'Success'
};
