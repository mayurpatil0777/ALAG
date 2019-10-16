import React, { Component } from 'react';
import Login from './Login';
import Dashboards from './Dashboards';
import '../cssFiles/dashboards.css'

class MainParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: true,
        }
    }
    submitBtn = () => {
        console.log("submit");
        this.setState({
            showLogin: false
        })

    }
    render() {
        return (
            <div>
                {this.state.showLogin ? <Login submitBtn={this.submitBtn}></Login> : <Dashboards></Dashboards>}

            </div>
        );
    }
}

export default MainParent;