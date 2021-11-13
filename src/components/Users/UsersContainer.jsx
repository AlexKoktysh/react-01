import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, changePage } from '../../redux/Users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageSize) => {
        this.props.changePage(pageSize, this.props.pageSize)
    }
    
    render() {
        return (
            <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users {...this.props} onPageChange={this.onPageChange}
            />
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

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers, changePage})
)(UsersContainer)