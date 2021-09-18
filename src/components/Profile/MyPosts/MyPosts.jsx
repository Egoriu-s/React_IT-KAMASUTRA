import React from 'react';
import style_posts from './MyPosts.module.css';
import Post from './Post/Post';
import {ReduxPostFormContainer} from "./Forms/PostForm";


const MyPosts = React.memo(
    (props) => {

        console.log('YOYOYO');

        let postsElements = props.postsArray.map((el) =>
            <Post key={el.id} post={el.post} like={el.like}/>);

        let addPostInRedux = (formData) => {
            props.addPostState(formData.newPost);
        };

        return (
            <div className={style_posts.content}>
                <ReduxPostFormContainer onSubmit={addPostInRedux}/>
                <div className={style_posts.allPosts}>
                    {postsElements}
                </div>
            </div>
        );
    }
);

export default MyPosts;