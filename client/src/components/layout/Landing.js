import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
// import { Link } from 'react-router-dom';
import {codeCheck} from '../../actions/codeActions';
// import { createCode } from '../../actions/codeActions';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            codeInput: '',
            errors: {}
        }
        
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors})
        }
    }

    onSubmit(e){
        e.preventDefault();
    
        const codeObject = {
            code: this.state.codeInput
        }

        this.props.codeCheck(codeObject);

        // const userData = {
        //   email: this.state.email,
        //   password: this.state.password
        // };
    
        // this.props.loginUser(userData);


    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {

        const { errors } = this.state;

        return (
            <div className="landing">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">
                            Code Manager
                        </h1>
                        <small className="d-block pb-3">* = required fields</small>
                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                placeholder="Check for Code"
                                name="codeInput"
                                type="codeInput"
                                value={this.state.codeInput}
                                onChange={this.onChange}
                                error={errors.codeInput}
                            />

                        <input type="submit" className="btn btn-info btn-block mt-4" />    
                        </form>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    codeCheck: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    codeCheck: state.codeObject,
    errors: state.errors
});

export default connect(mapStateToProps,{codeCheck})(Landing);