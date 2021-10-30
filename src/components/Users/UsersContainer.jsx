import React from 'react';
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator, unFollowActionCreator } from '../../redux/Users-reducer';
import Users from './Users';

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.usersPage
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
        }
    }
}

const UsersConteiner = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersConteiner;