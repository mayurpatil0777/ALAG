import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';


class NoData extends Component {
    render() {
        return (
            <div className="row py-4">
                <blockquote className="blockquote mx-auto text-center noDataBox">
                    <i className="material-icons mx-auto noDataIcon mb-5">label_off</i>
                    <p className="mb-0">You have not raised any ticket yet.</p>
                    <NavLink to='/createTicket'><button type="button" className="btn btn-primary btn-block mt-4 mr-3">Create</button></NavLink>

                </blockquote>

            </div>
        );
    }
}

export default NoData;