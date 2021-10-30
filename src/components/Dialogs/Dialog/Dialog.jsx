import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css'

const Dialog = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://slovnet.ru/wp-content/uploads/2018/12/6-65.jpg' />
            <NavLink to={`/dialogs/${props.id}`}>{props.dialogName}</NavLink>
        </div>
    );
}

export default Dialog;

