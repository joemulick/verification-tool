import React, { Component } from 'react'

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
              <div className="container">
                <a className="navbar-brand" href="landing.html">Gatherology</a>
                
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="login.html">Back to Gatherology</a>
                    </li>
                  </ul>
              </div>
            </nav>
        )
    }
}

export default Navbar;