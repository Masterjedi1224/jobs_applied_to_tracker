import React from 'react';

export default class FormRow extends React.Component {
    onChange(event){
        this.props.onChange(event.target.name,event.target.value);
    }

    render(){
        return(
            <div className="row form-group">
                <div className="col-sm-4 col-md-4 col-lg-4 text-right">
                    <label>
                        {this.props.label}:
                    </label>
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8 text-left">
                    {this.props.type === 'tb' ? <input type="text" name={this.props.name} className="form-control" value={this.props.value} onChange={this.onChange.bind(this)} /> : <textarea name={this.props.name} value={this.props.value} className="form-control" onChange={this.onChange.bind(this)}></textarea>}
                </div>
            </div>
        );
    }
}