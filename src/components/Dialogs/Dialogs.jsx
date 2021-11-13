import React from 'react';
import Login from '../Login/Login';
import Dialog from './Dialog/Dialog';
import styles from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogs = props.state.dialogsPage.dialogsData.map(dialog => <Dialog dialogName={dialog.name} id={dialog.id} />)
    let messages = props.state.dialogsPage.messagesData.map(message => <Message message={message.message} />)
    let newMessage = React.createRef()
    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = () => {
        let textMessage = newMessage.current.value
        props.onMessageChange(textMessage)
    }

    if (!props.isAuth) return <Login />

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItem}>
                {dialogs}
            </div>
            <div>
                <div className={styles.messageItem}>
                    {messages}
                </div>
                <div>
                    <textarea onChange={onMessageChange} 
                                ref={newMessage} 
                                value={props.state.dialogsPage.newMessageData}
                                placeholder='Enter yout message' />
                    <button onClick={addMessage}>Send Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;