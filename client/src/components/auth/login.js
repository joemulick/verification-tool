import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/authActions';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const newLogin = {
            email: this.state.email,
            password: this.state.password
        }

        this.props.loginUser(newLogin);

        // axios.get('/api/adminLogin/login', admin)
        //     .then(res => console.log(res.data))
        //     .catch(err => this.State({ errors err.respons.data }))
        

        console.log(newLogin);
    }

    render(){

        const {errors} = this.state;

        const { user } = this.props.auth;

        return (
            <div className="login">
                {user ? user.name : null}
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Log In</h1>
                            <p className="lead text-center">Log in access for gatheroloie admin only</p>
                                <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <input 
                                            type="email" 
                                            className="form-control form-control-lg" 
                                            placeholder="Email Address" 
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input 
                                            type="password" 
                                            className="form-control form-control-lg" 
                                            placeholder="Password" 
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange} 
                                        />
                                    </div>
                                    <input type="submit" className="btn btn-info btn-block mt-4" />
                                </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { loginUser })(Login);