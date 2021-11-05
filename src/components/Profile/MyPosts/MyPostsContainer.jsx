import React from 'react';
import MyPosts from './MyPosts';
import { addPost, onPostChange } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const MyPostsContainer = connect(mapStateToProps, { onPostChange, addPost })(MyPosts)

export default MyPostsContainer;