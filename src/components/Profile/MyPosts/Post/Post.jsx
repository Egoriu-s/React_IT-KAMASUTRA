
import React from 'react';
import style_post from './Post.module.css';

const Post = (props) => {
   
console.log(props.message);
    return (

        <div className={style_post.item}>
            <p>{props.message}</p>
            <img src='https://pbs.twimg.com/media/EAtppBxU0AACj87.jpg' alt='' />
            <div><span>Like:{props.like} </span><button>Like</button></div>
        </div>
    )

};

export default Post;