import React, { Component } from 'react';
import Landing from './Landing';
import Dashboards from './Dashboards';
import '../cssFiles/dashboards.css';


class MainParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
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
                {this.state.showLogin ? <Landing submitBtn={this.submitBtn}></Landing> : <Dashboards></Dashboards>}

            </div>
        );
    }
}

export default MainParent;