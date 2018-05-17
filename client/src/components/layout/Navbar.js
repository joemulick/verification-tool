import React, { Component } from 'react';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
              <div className="container">
                <a className="navbar-brand" href="https://www.gatherologie.com/">gatherologie</a>
                
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.gatherologie.com/">Back to gatherologie</a>
                    </li>
                  </ul>
              </div>
            </nav>
        )
    }
}

export default Navbar;