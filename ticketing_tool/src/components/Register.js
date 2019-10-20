import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="col-5 mt-5 p-3 pb-5 mx-auto regBox">
                <form>
                    <div className="row">
                    <div className="form-group col-6">
                        <label for="name">First Name</label>
                        <input type="text" className="form-control reqLeft" name="fName" placeholder="Enter first name" onChange={this.props.onRegChange} required/>
                    </div>
                    <div className="form-group col-6">
                        <label for="name">Last Name</label>
                        <input type="text" className="form-control reqLeft" name="lName" placeholder="Enter last name" onChange={this.props.onRegChange} required/>
                    </div>
                    
                    </div>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control reqLeft" name="mailID" aria-describedby="emailHelp" placeholder="Enter email" 
                        onChange={this.props.onRegChange} required/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label for="name">Username</label>
                        <input type="text" className="form-control reqLeft" name="uName" placeholder="" onChange={this.props.onRegChange} required/>
                    </div>
                    <div className="row">
                    <div className="form-group col-6">
                        <label for="name">Password</label>
                        <input type="password" className="form-control col-12 reqLeft" name="pass" placeholder="" onChange={this.props.onRegChange} required/>
                    </div>
                    <div className="form-group col-6">
                        <label for="name">Confirm Password</label>
                        <input type="password" className="form-control col-12 reqLeft" name="confPass" placeholder="" onChange = {this.props.onRegChange} required/>
                    </div>
                    {this.props.confPassMsg ? <small className="mx-auto">{this.props.confPassMsg} </small>: ""}
                    </div>
                    <button type="submit" className="btn btn-primary float-right" onClick={this.props.register}><span>Register</span></button>

                </form>
            </div>
        );
    }
}

export default Register;