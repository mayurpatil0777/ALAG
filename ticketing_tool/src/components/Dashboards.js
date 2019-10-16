import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FirstDashboard from './FirstDashboard';
import SecondDashboard from './SecondDashboard';
import ThirdDashboard from './ThirdDashboard'
import Header from './Header';
import Footer from './Footer';

class Dashboards extends Component {
    render() {
        return (
            <div className="">

                <Header/>
                <Router>

                    <div className="row p-3 mt-3">

                        <div className="col-md-1 leftBar">
                            <ul className="navbar-nav mr-auto ">
                                <li><Link to={'/first'} className="nav-link"><span class="material-icons leftIcon">home</span> Home </Link></li>
                                <li><Link to={'/second'} className="nav-link"> Firsttttt </Link></li>
                                <li><Link to={'/third'} className="nav-link"> Secondddddd </Link></li>
                            </ul>
                        </div>
                        <div className="col-md-11 mainDisp">
                            <Switch>

                                <Route exact path='/first' component={FirstDashboard} />
                                <Route exact path='/second' component={SecondDashboard} />
                                <Route exact path='/third' component={ThirdDashboard} />
                            </Switch>
                        </div>
                    </div>
                </Router>
                <Footer/>
            </div>
        );
    }
}

export default Dashboards;