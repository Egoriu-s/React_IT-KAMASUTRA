import React from 'react';
import style_post from './Post.module.css';

const Post = (props) => {

    return (
        <div className={style_post.item}>
            <div className={style_post.item2}>
                <div>
                    <img src='https://w-dog.ru/wallpapers/6/1/429797546218124/kot-glaza-usy.jpg' alt=''/>
                </div>
                <div><p>{props.post}</p></div>
            </div>
            <div><span>Like: {props.like} </span>
                <button>Like</button>
            </div>
        </div>
    )

};

export default Post;