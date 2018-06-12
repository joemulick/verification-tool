import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';

class CreateCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            displaySocialInputs: false,
            code: '',
            errors: {}
        }
    }
    render() {
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <h1 className="display-4 text-center">
                            Code Manager
                        </h1>
                        <p>
                            Edit your codes
                        </p>
                        <small className="d-block pb-3">* = required fields</small>
                    </div>
                </div>
            </div>
        )
    }
}

CreateCode.propTypes = {
    code: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    code: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps)(CreateCode)