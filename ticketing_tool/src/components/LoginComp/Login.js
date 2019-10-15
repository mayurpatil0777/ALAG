import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    login=()=>{

        window.location('/home')
    }
    render() {
        return (
            <div>
                <form method="post" action="#" class="login">
                    <p>
                        <label for="login">Email:</label>
                        <input type="text" name="login" id="login" placeholder="Enter 7 digit username" maxlength="7"/>
    </p>

                        <p>
                            <label for="password">Password:</label>
                            <input type="password" name="password" id="password" placeholder="Enter password"/>
    </p>

                            <p class="login-submit">
                                <button type="submit" class="login-button" onClick={this.login}><span>Login</span></button>
                            </p>

                            <p class="forgot-password"><a href="#">Forgot your password?</a></p>
  </form>
            </div>
                    );
                }
            }
            
export default Login;