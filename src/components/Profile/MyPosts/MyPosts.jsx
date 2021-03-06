import styles from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validatros/validators';
import { Textarea } from '../../Common/FormControl/FormControl';

const maxLength10 = maxLength(10)

const MyPostForm = React.memo(props => {
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
})

const MyPostReduxForm = reduxForm({form: 'post'})(MyPostForm)

const MyPosts = (props) => {
    console.log('RENDER')
    let myPostsData = props.posts.map(post => <Post message={post.message} likeCounts={post.likeCounts} />)
    const onSubmit = (dataForm) => {
        props.addPost(dataForm.post)
    }
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

export default MyPosts;