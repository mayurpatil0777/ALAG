import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import $ from 'jquery';


class Header extends Component {
   
    logout=()=>{
        console.log("logout");
        window.location. reload();
        
    }
    render() {
        return (
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                        </ul>
                    </div>
                    <span className="material-icons">home</span>
                    <span className="material-icons">person</span>
                    <NavLink to=''><span className="material-icons" data-toggle="tooltip" title="yes" onClick={this.logout}>logout</span></NavLink>
                </nav>
            </div>
        );
    }
}

export default Header;