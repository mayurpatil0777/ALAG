import React, { Component } from 'react';
import Register from './Register';
import Login from './Login';
import axios from 'axios'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDiv: true
        }
    }
    register = () => {
        axios.post('/register', {
            firstName: 'Finn',
            lastName: 'Williams'
          })
          .then((response) => {
            console.log("success",response);
          }, (error) => {
            console.log(error);
          });
        this.setState({
            loginDiv: !this.state.loginDiv
        })
    }

    render() {
        return (
            <div>
                {this.state.loginDiv ? (<Login submitBtn={this.props.submitBtn} register={this.register}/>) : <Register register={this.register}/>}
            </div>
        );
    }
}

export default Landing;