import styles from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validatros/validators';
import { Textarea } from '../../Common/FormControl/FormControl';

const maxLength10 = maxLength(10)
const MyPosts = (props) => {
    const onSubmit = (dataForm) => {
        props.addPost(dataForm.post)
        console.log(dataForm.post)
    }

    let myPostsData = props.state.profilePage.postsData.map(post => <Post message={post.message} likeCounts={post.likeCounts} />)

    return (
        <div className={styles.item}>
            <h3>My post</h3>
            <div>
                <MyPostReduxForm onSubmit={onSubmit} />
            </div>
            <div className={styles.posts}>
                {myPostsData}
            </div>
        </div>
    );
}

const MyPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter your post'} name={'post'} component={Textarea} validate={[required, maxLength10]} />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const MyPostReduxForm = reduxForm({form: 'post'})(MyPostForm)

export default MyPosts;