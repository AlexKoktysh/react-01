import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { addMessage, onMessageChange } from '../../redux/dialogs-reducer';
import { authRedirectHOC } from '../HOC/authRedirectHOC';
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        state: state,
        // isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, { addMessage, onMessageChange }),
    authRedirectHOC
)(Dialogs)