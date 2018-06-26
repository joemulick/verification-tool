import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
// import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import InputGroup from '../common/InputGroup';
// import SelectListGroup from '../common/SelectListGroup';
import { createCode } from '../../actions/codeActions';


class CreateCode extends Component {
    constructor(props){
        super(props);
        this.state = {
            displaySocialInputs: false,
            code: '',
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

        const codeData = {
            code: this.state.code
        }

        this.props.createCode(codeData, this.props.history);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">
                            Code Manager
                        </h1>
                        <small className="d-block pb-3">* = required fields</small>
                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup
                                code="code"
                            />
                        </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

CreateCode.propTypes = {
    code: PropTypes.string.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    code: state.code,
    errors: state.errors
})

export default connect(mapStateToProps, { createCode })(
    withRouter(CreateCode)
  );