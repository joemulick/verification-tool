import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentCode } from '../../actions/codeActions';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentCode();
    }


  render() {

    // const { user } = this.props.auth;
    const { code, loading } = this.props.code;

    let dashboardContent;

    if(code === null || loading) {
        dashboardContent = <h4>Loading...</h4>
    } else {
        dashboardContent = <h1>Hello</h1>
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