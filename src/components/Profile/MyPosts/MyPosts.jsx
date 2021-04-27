import React from 'react';
import style_posts from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.postsElements.map((el) => <Post key={el.id} message={el.message}
                                                              like={el.like}/>);

    let addPostState = () => {
        props.addPostStateContainer();
    };

    let newPostState = (ev) => {
        let text = ev.target.value;
        props.newPostStateContainer(text);
    };

    return (
        <div className={style_posts.content}>

            <div className={style_posts.createPost}>
                <p>My posts</p>
                <div>
                    <textarea onChange={newPostState} value={props.textareaValue}/>
                </div>
                <div>
                    <button onClick={addPostState}>Add post</button>
                </div>
            </div>

            <div className={style_posts.allPosts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;