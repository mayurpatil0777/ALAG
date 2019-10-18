import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import CreateTicket from './CreateTicket';
import ViewTickets from './ViewTickets';
import ThirdDashboard from './ThirdDashboard'
import Header from './Header';
import Footer from './Footer';
//import Landing from './Landing';
import MainParent from './MainParent';
import Login from './Login'

class Dashboards extends Component {
    render() {
        return (
            <div className="">
                <Router>
                    <Header />
                    <div className="row pl-0 pt-3 pr-3 mt-1">

                        <div className="col-md-1 leftBar">
                            <ul className="navbar-nav mr-auto ">
                                <li><Link to={'/viewTickets'} className="nav-link"><span className="material-icons leftIcon">view_list</span>View</Link></li>
                                <li><Link to={'/createTicket'} className="nav-link"><span className="material-icons leftIcon">add_circle_outline</span>Create</Link></li>
                                <li><Link to={'/third'} className="nav-link"><span className="material-icons leftIcon">graphic_eq</span>Graphs</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-11 pr-0">
                            <div className="mainDisp">
                                <Switch>

                                    <Route exact path='/viewTickets' component={ViewTickets} />
                                    <Route exact path='/createTicket' component={CreateTicket} />
                                    <Route exact path='/third' component={ThirdDashboard} />
                                    <Redirect to='/viewTickets' />
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default Dashboards;