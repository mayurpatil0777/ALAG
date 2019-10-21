import React, { Component } from 'react';
import '../cssFiles/login.css';

class Login extends Component {
    render() {
        return (
            <div>
                <div className="login">
                    <p>
                        <label>Email:</label>
                        <input type="text" name="loginUser" id="login" placeholder="Enter email" onChange={this.props.onLoginChange} />
                    </p>

                    <p>
                        <label>Password:</label>
                        <input type="password" name="password" id="password" placeholder="Enter password" onChange={this.props.onLoginChange} />
                    </p>
                    {this.props.loginFailed ? <small className="form-text text-muted">{this.props.loginFailed}</small> : ''}
                    {/* <p className="login-submit">
                        <button type="submit" className="login-button" onClick={this.props.submitBtn}><span>Login</span></button>
                    </p> */}
                    <p className="">
                        <button type="submit" className="sbtn" onClick={this.props.submitBtn}><span>Login</span></button>
                    </p>
                    <p className="forgot-password"><a>Forgot your password?</a></p>

                    <p className="" onClick={this.props.newUser}><a>New User</a></p>
                </div>
            </div>
        );
    }
}

export default Login;