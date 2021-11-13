import React from 'react';
import { connect } from 'react-redux';
import { addMessage, onMessageChange } from '../../redux/dialogs-reducer';
import { authRedirectHOC } from '../HOC/authRedirectHOC';
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        state: state,
        isAuth: state.auth.isAuth
    }
}

const DialogsContainer = connect(mapStateToProps, { addMessage, onMessageChange })(authRedirectHOC(Dialogs))

export default DialogsContainer;