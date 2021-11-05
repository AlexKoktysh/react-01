import React from 'react';
import { connect } from 'react-redux';
import { addMessage, onMessageChange } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'

const mapStateToProps = (state) => {
    return {
        state: state
    }
}

const DialogsContainer = connect(mapStateToProps, { addMessage, onMessageChange })(Dialogs)

export default DialogsContainer;