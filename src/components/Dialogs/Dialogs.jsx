import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../utils/validatros/validators';
import { Textarea } from '../Common/FormControl/FormControl';
import Dialog from './Dialog/Dialog';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const maxLength50 = maxLength(50)

const Dialogs = (props) => {
    let dialogs = props.state.dialogsPage.dialogsData.map(dialog => <Dialog dialogName={dialog.name} id={dialog.id} />)
    let messages = props.state.dialogsPage.messagesData.map(message => <Message message={message.message} />)

    const onSubmit = (dataForm) => {
        props.addMessage(dataForm.message)
        console.log(dataForm.message)
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {dialogs}
            </div>
            <div>
                <div className={styles.messageItem}>
                    {messages}
                </div>
                <DialogReduxForm onSubmit={onSubmit} />
            </div>
        </div>
    );
}

const DialogForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter yout message'} name={'message'} component={Textarea} validate={[required, maxLength50]} />
            </div>
            <div>
                <button>Send Message</button>
            </div>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: 'dialog'})(DialogForm)

export default Dialogs;