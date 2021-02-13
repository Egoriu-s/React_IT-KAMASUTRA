import React from 'react';
import style_profile from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {

    return (
        <div className={style_profile.content}>
            <ProfileInfo
                background='https://s1.1zoom.ru/b5050/828/289304-Sepik_1920x1200.jpg'
                avatar='https://sun9-40.userapi.com/impg/O8UmZl2_HNqqHHTLXe_BAiVfl3DLEBtUVmad5w/h9r5N8hp7CU.jpg?size=768x1024&quality=96&proxy=1&sign=6476acdea0ddb1062fc2766f55e8066a&type=album'/>
            <MyPosts postsArray={props.postsArray}/>
        </div>

    );
};

export default Profile;