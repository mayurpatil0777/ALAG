import React, { Component } from 'react';
import CreateTask from './CreateTask';

class FirstDashboard extends Component {
    render() {
        return (
           <div>
               <CreateTask></CreateTask>
           </div>
        );
    }
}

export default FirstDashboard;