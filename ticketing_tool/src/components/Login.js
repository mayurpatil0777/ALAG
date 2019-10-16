import React, { Component } from 'react';
import '../cssFiles/login.css';

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
                <div className="login">
                    <p>
                        <label>Email:</label>
                        <input type="text" name="login" id="login" placeholder="Enter 7 digit username" />
                    </p>

                    <p>
                        <label>Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter password" />
                    </p>

                    <p className="login-submit">
                        <button type="submit" className="login-button" onClick={this.props.submitBtn}><span>Login</span></button>
                    </p>
                    <p className="">
                        <button type="submit" className="login-button" onClick={this.props.submitBtn}><span>Login</span></button>
                    </p>
                    <p className="forgot-password"><a href="/">Forgot your password?</a></p>
                </div>
        );
    }
}

export default Login;