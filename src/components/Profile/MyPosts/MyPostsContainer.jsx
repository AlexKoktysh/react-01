import React from 'react';
import MyPosts from './MyPosts';
import { addPost, onPostChange } from '../../../redux/profile-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

export default compose(
    connect(mapStateToProps, { onPostChange, addPost })
)(MyPosts)