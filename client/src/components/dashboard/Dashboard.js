import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentCode } from '../../actions/codeActions';

class Dashboard extends Component {
    componentDidMount(){
        this.props.getCurrentProfile();
    }


  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default connect(null, { getCurrentCode }) (Dashboard);