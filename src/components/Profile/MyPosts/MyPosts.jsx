import styles from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';

const MyPosts = (props) => {
    let myPostsData = props.state.profilePage.postsData.map(post => <Post message={post.message} likeCounts={post.likeCounts} />)
    let newPost = React.createRef()
    let addPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let textPost = newPost.current.value
        props.onPostChange(textPost)
    }
    return (
        <div className={styles.item}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPost} value={props.state.profilePage.onChangePost} />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {myPostsData}
            </div>
        </div>
    );
}

export default MyPosts;