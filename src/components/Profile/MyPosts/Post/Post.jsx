import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img src='https://slovnet.ru/wp-content/uploads/2018/12/6-65.jpg'/>
            {props.message}
            <div>
                <span>like</span> 
                {props.likeCounts}
            </div>
        </div>
    );
}

export default Post;