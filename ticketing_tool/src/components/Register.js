import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="col-5 mt-3 p-3 pb-5 mx-auto regBox">
                <form>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter name" /></div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Phone number</label>
                        <input type="email" class="form-control" placeholder="Enter email" />
                        
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <button type="submit" className="btn btn-primary float-right" onClick={this.props.register}><span>Register</span></button>

                </form>


            </div>
        );
    }
}

export default Register;