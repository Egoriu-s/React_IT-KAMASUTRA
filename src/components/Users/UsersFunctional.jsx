import React from 'react';
import style_users from "./Users.module.css";
import Preloader from "../Second_files/Preloader/Preloader";
import Paginator from "../Second_files/Paginator/Paginator";
import User from "./User";

const UsersFunctional = (props) => {

    return (

        <div className={style_users.content}>

            <Paginator currentPage={props.currentPage}
                       totalCount={props.totalCount}
                       pageSize={props.pageSize}
                       buttonPrevChanged={props.buttonPrevChanged}
                       numberPageChanged={props.numberPageChanged}
                       buttonNextChanged={props.buttonNextChanged}/>

            {props.isFetchingPreloader ? <Preloader/> : null}

            <div>
                {props.usersArray.map((el) => <User key={el.id} {...el}
                                                    followingProgressIdArray={props.followingProgressIdArray}
                                                    followUnfollowThunk={props.followUnfollowThunk}/>)
                }
            </div>

        </div>

    )

};

export default UsersFunctional;