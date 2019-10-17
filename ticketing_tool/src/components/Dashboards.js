import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import FirstDashboard from './FirstDashboard';
import SecondDashboard from './SecondDashboard';
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
                                <li><Link to={'/first'} className="nav-link"><span className="material-icons leftIcon">add_circle_outline</span>Create</Link></li>
                                <li><Link to={'/second'} className="nav-link"><span className="material-icons leftIcon">view_list</span>View</Link></li>
                                <li><Link to={'/third'} className="nav-link"><span className="material-icons leftIcon">graphic_eq</span>Graphs</Link></li>
                            </ul>
                        </div>
                        <div className="col-md-11 pr-0">
                            <div className="mainDisp">
                                <Switch>
                                    
                                    <Route exact path='/first' component={FirstDashboard} />
                                    <Route exact path='/second' component={SecondDashboard} />
                                    <Route exact path='/third' component={ThirdDashboard} />
                                    <Redirect to = '/first'/>
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