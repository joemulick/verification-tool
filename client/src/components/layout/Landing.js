import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
// import { Link } from 'react-router-dom';
import { codeCheck } from '../../actions/codeActions';
// import { createCode } from '../../actions/codeActions';

class Landing extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayLandingInputs: false,
            codeCheck: '',
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
        e.preventDeault();

        const codeCheck = {
            codeCheck: this.state.codeCheck
        }

        this.props.createCode(codeCheck, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    render () {

        const { errors } = this.state;

        return (
            <div className="create-code">
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
                                name="codeCheck"
                                value={this.state.codeCheck}
                                onChange={this.onChange}
                                errors={errors.codeCheck}
                                info="Add A Code With This Input Field"
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
    codeCheck: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    codeCheck: state.code,
    errors: state.errors
});

export default connect(mapStateToProps, { codeCheck })(
    withRouter(Landing)
);