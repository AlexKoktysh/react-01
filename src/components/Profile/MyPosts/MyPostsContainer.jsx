import React from 'react';
import MyPosts from './MyPosts';
import { addPost } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.postsData
        // state: state.profilePage
    }
}

export default compose(
    connect(mapStateToProps, { addPost })
)(MyPosts)