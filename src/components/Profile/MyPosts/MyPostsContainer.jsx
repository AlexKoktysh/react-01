import React from 'react';
import MyPosts from './MyPosts';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onPostChange: (textPost) => {
            dispatch(updatePostTextActionCreator(textPost))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;