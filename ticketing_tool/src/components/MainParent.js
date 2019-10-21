import React, { Component } from 'react';
import Landing from './Landing';
import Dashboards from './Dashboards';
import '../cssFiles/dashboards.css';
import axios from 'axios'


class MainParent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLanding: true,
        }
    }

    onLoginChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
               console.log("ststst",this.state)
    }
    submitBtn = (e) => {
        console.log("submit");
        axios.get('http://localhost:4000/login/'+ this.state.loginUser)
            .then((res,e) => {
                const logUser = res.data;
                console.log("get baba   ",logUser)
                if(logUser.pass !== this.state.password){
                    this.setState({
                        loginFailed: "Please enter valid credentials"
                    })
                e.preventDefault();
                
                }

                this.setState({
                    showLanding: logUser.loginDiv
                })
            }).catch((err)=>{
           //     alert("errorrr")
            })
        
        //console.log("sbmt",this.state)
    }
    render() {
        return (
            <div>
                {this.state.showLanding ?
                    <Landing submitBtn={this.submitBtn}
                        onLoginChange={this.onLoginChange}
                        loginFailed={this.state.loginFailed}></Landing>
                    : <Dashboards></Dashboards>}

            </div>
        );
    }
}

export default MainParent;