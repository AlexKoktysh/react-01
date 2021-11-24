import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow, getUsers, changePage } from '../../redux/Users-reducer';
import { getUsersGet, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingIsProgress } from './../../redux/selectors'
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
        users: getUsersGet(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingIsProgress: getFollowingIsProgress(state)
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, getUsers, changePage})
)(UsersContainer)