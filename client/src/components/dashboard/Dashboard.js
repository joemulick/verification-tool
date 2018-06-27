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

    if (code === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if codes exist
      if (Object.keys(code).length > 0) {
        dashboardContent = <h4>No Codes To Display</h4>;
      } else {
        dashboardContent = (
          <div>
            <p className="text-center">Add More Codes</p>
            <Link to="/create-code" className="btn btn-lg btn-info">
              Code
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Dashboard</h1>
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