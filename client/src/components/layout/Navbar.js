import React, { Component } from 'react';
import {Image} from 'cloudinary-react';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
              <div className="container">
                <a className="navbar-brand" href="https://www.gatherologie.com/">
                  <Image publicId="gatherologie-main-logo_g8qtjl.png" >
                  </Image>
                </a>
                
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