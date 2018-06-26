import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentCode } from '../../actions/codeActions';
import Spinner from '../common/Spinner';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentCode();
    }


  render() {

    // const { user } = this.props.auth;
    const { code, loading } = this.props.code;

    let dashboardContent;

        dashboardContent = (
          <div>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-code" className="btn btn-lg btn-info">
              Create Profile
            </Link>
          </div>
        );

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
                {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    )
}

}

Dashboard.propTypes = {
  getCurrentCode: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  code: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  code: state.code,
  auth: state.auth
})

export default connect(mapStateToProps, { getCurrentCode }) (Dashboard);