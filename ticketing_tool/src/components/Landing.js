import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
//import axios from 'axios';
const axios = require('axios');
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDiv: true,
        }
    }

    register = (e) => {
        // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
        /* this.setState({
            loginDiv: true
        }); */

        if (this.state.pass !== this.state.confPass) {
            console.log("plz confirm password");
            e.preventDefault();
            this.setState({
                confPassMsg: "Password and confirm password doesn't match!!!"
            })
        }
        else {
            axios({
                method: 'post',
                url: 'http://localhost:4000/register',
                data: this.state
            }).then((response) => {
                console.log("success", response);
            }, (error) => {
                console.log(error);
            })
        }
    }

    newUser = () => {
        this.setState({
            loginDiv: !this.state.loginDiv
        })
    }

    onRegChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
       //   console.log("newwww", this.state)
    }
    render() {
        return (
            <div>
                {this.state.loginDiv ?
                    (<Login submitBtn={this.props.submitBtn} newUser={this.newUser} 
                        onLoginChange={this.props.onLoginChange}
                        loginFailed={this.props.loginFailed}/>) :
                    <Register register={this.register} onRegChange={this.onRegChange}
                        confPassMsg={this.state.confPassMsg}
                        validMail={this.props.validMail} />}
            </div>
        );
    }
}

export default Landing;