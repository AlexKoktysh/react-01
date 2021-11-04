import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setCurrentPageActionCreator, setUsersActionCreator, unFollowActionCreator, setTotalUsersCountActionCreator } from '../../redux/Users-reducer';
import Users from './Users';
import * as axios from 'axios';

class UsersContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageSize) => {
        this.props.setCurrentPage(pageSize)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageSize}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            })
    }
    
    render() {
        return <Users props={this.props} onPageChange={this.onPageChange}/>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unFollow: (userId) => {
            dispatch(unFollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountActionCreator(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)