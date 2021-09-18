import React from 'react';
import style_profile from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPosts_Container";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../Second_files/Preloader/Preloader";

const Profile = (props) => {

    if (!props.profilePageProfile) {
        console.log('PROFILE____');
        return <Preloader/>
    }
    console.log('PROFILE');
    return (
        <div className={style_profile.content}>
            <ProfileInfo profilePageProfile={props.profilePageProfile}
                         profilePageStatus={props.profilePageStatus}
                         updateStatusThunk={props.updateStatusThunk}/>
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;