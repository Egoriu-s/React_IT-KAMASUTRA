import React from 'react';
import style_users from "./Users.module.css";
import userDefaultPhoto from "../../assets/images/user.jpg";
import {NavLink} from "react-router-dom";

const User = (props) => {
    return (

        <div className={style_users.user_foto_and_follow}>
            <div>
                <div>
                    <NavLink to={'/profile/' + props.id}>
                        <img src={props.photos.small != null ? props.photos.small : userDefaultPhoto}
                             alt='vd'/>
                    </NavLink>
                </div>

                {props.followed ?

                    <div>
                        <button disabled={props.followingProgressIdArray.some(id => id === props.id)}
                                onClick={() => {
                                    props.followUnfollowThunk(props.id, 'unfollowUser');
                                }}>DELETE
                        </button>
                    </div>

                    : <div>
                        <button disabled={props.followingProgressIdArray.some(id => id === props.id)}
                                onClick={() => {
                                    props.followUnfollowThunk(props.id, 'followUser');
                                }}>ADD
                        </button>
                    </div>}

            </div>
            <div className={style_users.user_name}>
                <div>
                    <div className={style_users.name}>{props.name}</div>
                    <div className={style_users.status}>{props.status != null ? props.status : 'На связи'}</div>
                </div>
                <div className={style_users.city}>{props.city != null ? props.status : 'Царство счастья'}</div>
            </div>
        </div>


    )


};

export default User;