import React from 'react';
import { connect } from 'react-redux';
import { follow, setCurrentPage, setUsers, unFollow, setTotalUsersCount, toogleIsFetching, toogleFollowingProgress } from '../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { userAPI } from '../../API/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toogleIsFetching(true)
        userAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChange = (pageSize) => {
        this.props.setCurrentPage(pageSize)
        this.props.toogleIsFetching(true)
        userAPI.getUsers(pageSize, this.props.pageSize)
            .then(data => {
                this.props.toogleIsFetching(false)
                this.props.setUsers(data.items)
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
        isFetching: state.usersPage.isFetching,
        followingIsProgress: state.usersPage.followingIsProgress
    }
}

export default connect(mapStateToProps, 
    {follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toogleIsFetching,
    toogleFollowingProgress})(UsersContainer)