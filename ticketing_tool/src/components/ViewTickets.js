import React, { Component } from 'react';
import UserTbl from './UserTbl';
import NoData from './NoData'
import axios from 'axios';

class ViewTickets extends Component {
    constructor(props) {
        super(props);
        this.state={
            uTktsCount:"No data"
        }
    }
    
    componentDidMount() {
        axios.get(`/qwe`).then((output) => {
            console.log(output);
            this.setState({
                uTktsCount: output.data.response
            });
        }).catch(()=>{
            console.log("dont worry");
            this.setState({
                uTktsCount: 'No data'
            });
        })
}
    render() {
        return (
            <div>
{this.state.uTktsCount === "No data" ? <NoData/>: <UserTbl></UserTbl>}
               
            </div>
        );
    }
}

export default ViewTickets;