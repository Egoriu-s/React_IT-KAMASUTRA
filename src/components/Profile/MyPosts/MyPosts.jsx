import React from 'react';
import style_posts from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.postsArray.map((el) => <Post message={el.message} like={el.like}/>);

    return (
        <div className={style_posts.content}>

            <div className={style_posts.createPost}>
                <p>My posts</p>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={style_posts.allPosts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;