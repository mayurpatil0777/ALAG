import React, { Component } from 'react';
import Register from './Register';
import Login from './Login'

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerDiv: true
        }
    }
    register = () => {
        this.setState({
            registerDiv: !this.state.registerDiv
        })
    }

    render() {
        return (
            <div>
                {this.state.registerDiv ? (<Login submitBtn={this.props.submitBtn} register={this.register}/>) : <Register register={this.register}/>}
            </div>
        );
    }
}

export default Landing;