import React, { Component } from 'react';
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

    if(code === null || loading) {
        dashboardContent = <Spinner>Loading...</Spinner>
    } else {
        dashboardContent = <h1>Hello a</h1>
    }

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