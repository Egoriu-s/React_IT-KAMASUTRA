import React from 'react';
import style_profileInfo from './ProfileInfo.module.css';
import userDefaultPhoto from "../../../assets/images/userProfile.png";

const ProfileInfo = (props) => {

    return (
        <div className={style_profileInfo.content}>

            <div className={style_profileInfo.ImageAvatarka}><img src={props.usersProfile.photos.large != null ?
                props.usersProfile.photos.large : userDefaultPhoto} alt=''/>
            </div>

            <div className={style_profileInfo.aboutMe}>
                <div><p>About me</p></div>
               <p>{props.usersProfile.aboutMe}</p>
            </div>

            <div className={style_profileInfo.contacts}>
                <div><p>My contacts</p></div>
                <div><p>Facebook: {props.usersProfile.contacts.facebook != null ?
                    props.usersProfile.contacts.facebook : 'НЕТ'}</p></div>
                <div><p>Website: {props.usersProfile.contacts.website != null ?
                    props.usersProfile.contacts.website : 'НЕТ'}</p></div>
                <div><p>Twitter: {props.usersProfile.contacts.twitter != null ?
                    props.usersProfile.contacts.twitter : 'НЕТ'}</p></div>
                <div><p>Instagram: {props.usersProfile.contacts.instagram != null ?
                    props.usersProfile.contacts.instagram : 'НЕТ'}</p></div>
                <div><p>Youtube: {props.usersProfile.contacts.youtube != null ?
                    props.usersProfile.contacts.youtube : 'НЕТ'}</p></div>
                <div><p>Github: {props.usersProfile.contacts.github != null ?
                    props.usersProfile.contacts.github : 'НЕТ'}</p></div>
                <div><p>mainLink: {props.usersProfile.contacts.mainLink != null ?
                    props.usersProfile.contacts.mainLink : 'НЕТ'}</p></div>
            </div>

        </div>
    );
};

export default ProfileInfo;