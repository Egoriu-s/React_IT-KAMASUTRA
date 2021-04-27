import React from 'react';
import style_profile from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPosts_Container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Preloader/Preloader";

const Profile = (props) => {

    if (!props.profilePage.usersProfile) {
        return <Preloader/>
    }

    return (
        <div className={style_profile.content}>
            <ProfileInfo usersProfile={props.profilePage.usersProfile}/>
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;