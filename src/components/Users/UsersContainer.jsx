import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, unFollow, setTotalUsersCount, toogleIsFetching } from '../../redux/Users-reducer';
import Users from './Users';
import * as axios from 'axios';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageSize) => {
        this.props.setCurrentPage(pageSize)
        this.props.toogleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageSize}&count=${this.props.pageSize}`, {
            withCredentials: true
        }).then(response => {
            this.props.toogleIsFetching(false)
            this.props.setUsers(response.data.items)
            })
    }
    
    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users props={this.props} onPageChange={this.onPageChange}/>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, 
    {follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching})(UsersContainer)