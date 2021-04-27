import React from 'react';
import style_userName from './UserName.module.css';
import userDefaultPhoto from './../../../assets/images/nev-pre2125007.jpg';

const UserName = (props) => {

    let followFriendState = () => {
        let userID = props.userID;
        props.followFriendStateContainer(userID);
    };

    let unfollowFriendState = () => {
        let userID = props.userID;
        props.unfollowFriendStateContainer(userID);
    };

    let fButton = () => {
        if (props.followed === false) {
            return (
                <div>
                    <button onClick={followFriendState}>ADD</button>
                </div>
            )
        } else if (props.followed === true) {
            return (
                <div>
                    <button onClick={unfollowFriendState}>DELETE</button>
                </div>
            )
        }
    };

    return (
        <div className={style_userName.user}>
            <div>
                <div>
                    <img src={props.photos.small != null ? props.photos.small : userDefaultPhoto} alt='vd'/>
                </div>
                {fButton()}
            </div>
            <div className={style_userName.user_name}>
                <div>
                    <div className={style_userName.name}>{props.name}</div>
                    <div className={style_userName.status}>{props.status}</div>
                </div>
                <div className={style_userName.city}>{props.city}</div>
            </div>
        </div>
    );
};

export default UserName;