import React, { Component } from 'react';
import {Image} from 'cloudinary-react';

class Navbar extends Component {
    render(){
        return (
            <nav className="navbar navbar-expand-sm mb-4">
              <div className="container">
                <a className="navbar-brand" href="https://www.gatherologie.com/">
                <Image cloudName="ddsihrmda" publicId="gatherologie-main-logo_g8qtjl.png" width="180" crop="scale">

                </Image>
                </a>
                
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="https://www.gatherologie.com/"><p className="nav-text">Back to gatherologie</p></a>
                    </li>
                  </ul>
              </div>
            </nav>
        )
    }
}

export default Navbar;