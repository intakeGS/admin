//PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getComps } from '../../ducks/compDuck';
//COMPONENTS
import Users from '../../components/Users/index';
import Views from '../../components/Views/index';
//CSS
import './adminMain.css';

class AdminMain extends Component{

    componentDidMount() {
        const userId = {userId: this.props.userid}
        if (userId.userId) {
            this.props.getComps(userId)
        }
    }
    render(){
        return (
            <div className="adminMain-main">
                <div className="adminMain-working">
                    <div className="adminMain-users"><Users/></div>
                    <div className="adminMain-views"><Views/></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        varComponentTypes: state.compDuck.varComponentTypes,
        userid: state.messageDuck.userid
    };
}

export default connect( mapStateToProps, { getComps } )( AdminMain );
