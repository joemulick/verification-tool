import React, { Component } from 'react';
import { Image } from 'cloudinary-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions'
import { clearCurrentCode } from '../../actions/codeActions';

class Navbar extends Component {

    onLogoutClick(e){
      e.preventDefault();
      this.props.clearCurrentCode();
      this.props.logoutUser();
    }

    render(){
      const { isAuthenticated } = this.props.auth;

      const authLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
              <a href='#' onClick={this.onLogoutClick.bind(this)}className="nav-link"><p className="nav-text">Logout</p>
              </a> 
          </li>
        </ul>
      )

      const guestLinks = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.gatherologie.com/"><p className="nav-text">Back to gatherologie</p></a>
          </li>
        </ul>
      )

        return (
            <nav className="navbar navbar-expand-sm mb-4">
              <div className="container">
                <a className="navbar-brand" href="https://www.gatherologie.com/">
                <Image cloudName="ddsihrmda" publicId="gatherologie-main-logo_g8qtjl.png" width="180" crop="scale">

                </Image>
                </a>
                
                { isAuthenticated ? authLinks : guestLinks }  

              </div>
            </nav>
        )
    }
}

Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logoutUser, clearCurrentCode }) (Navbar);