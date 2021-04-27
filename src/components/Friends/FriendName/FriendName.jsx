
import React from 'react';
import style_friendName from './FriendName.module.css';

const FriendName = (props) => {

    // let message = props.message;

    return (
        <div className={style_friendName.name}>
            <div><img src='https://pbs.twimg.com/media/EAtppBxU0AACj87.jpg' alt='' /></div>
            <div>Алоха, {props.name}</div>
        </div>
    );
};

export default FriendName;