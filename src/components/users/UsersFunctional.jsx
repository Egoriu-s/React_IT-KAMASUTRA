import React from 'react';
import style_users from "./Users.module.css";
import userDefaultPhoto from "../../assets/images/user.jpg";
import Preloader from "../Preloader/Preloader";
import {NavLink} from "react-router-dom";

const UsersFunctional = (props) => {

    let pagesAll = Math.ceil(props.totalCount / props.pageSize);

    let pagesNumber = [];
    for (let i = 1; i <= pagesAll; i++) {
        pagesNumber.push(i);
    }

    if (props.currentPage > pagesNumber.length) {
        let firstNumber = pagesNumber.length + 1;
        for (let i = firstNumber; i <= firstNumber + 4; i++) {
            pagesNumber.push(i);
        }

    }

    window.PN = pagesNumber;

    return (
        <div className={style_users.content}>

            <div className={style_users.page_number}>

                {pagesNumber.map((el) =>
                    <div key={el}>
                        <button className={props.currentPage === el ? style_users.selected_page : ''}
                                onClick={() => {
                                    props.numberPageChanged(el);
                                }}>{el}</button>
                    </div>
                )}

                <div>
                    <button onClick={props.buttonNextChanged}> ></button>
                </div>
            </div>

            {props.isFetching ? <Preloader/> : null}

            <div>

                {props.usersArray.map((el) =>
                    <div className={style_users.user_foto_and_follow} key={el.id}>
                        <div>
                            <div>
                                <NavLink to={'/profile/' + el.id}>
                                    <img src={el.photos.small != null ? el.photos.small : userDefaultPhoto}
                                         alt='vd'/>
                                </NavLink>
                            </div>

                            {el.followed ?
                                <div>
                                    <button onClick={() => {
                                        props.unfollowFriend(el.id)
                                    }}>DELETE
                                    </button>
                                </div>
                                : <div>
                                    <button onClick={() => {
                                        props.followFriend(el.id)
                                    }}>ADD
                                    </button>
                                </div>}

                        </div>
                        <div className={style_users.user_name}>
                            <div>
                                <div className={style_users.name}>{el.name}</div>
                                <div
                                    className={style_users.status}>{el.status != null ? el.status : 'На связи'}</div>
                            </div>
                            <div className={style_users.city}>{el.city}</div>
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    )


};


export default UsersFunctional;