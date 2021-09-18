import React from 'react';
import style_profileInfo from './ProfileInfo.module.css';
import userDefaultPhoto from "../../../assets/images/userProfile.png";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = (props) => {
    console.log('PROFILE_INFO');
    return (
        <div className={style_profileInfo.content}>

            <div className={style_profileInfo.ImageAvatarka}>
                <div><img src={props.profilePageProfile.photos.large != null ?
                    props.profilePageProfile.photos.large : userDefaultPhoto} alt=''/>
                </div>
                <div>
                    <p>{props.profilePageProfile.fullName}</p>
                </div>
            </div>
            <div className={style_profileInfo.Right}>
                <div className={style_profileInfo.aboutMe}>

                    <div><ProfileStatusWithHook status={props.profilePageStatus}
                                                updateStatusThunk={props.updateStatusThunk}/></div>
                  <div>
                    <div>About me</div>
                    <div className={style_profileInfo.aboutMe_Me}>{props.profilePageProfile.aboutMe
                        ? props.profilePageProfile.aboutMe
                        : 'Пока нет инфы'}</div>
                  </div>
                </div>

                <div className={style_profileInfo.contacts}>
                    <div>My contacts</div>
                    <div><p>Facebook: {props.profilePageProfile.contacts.facebook != null ?
                        props.profilePageProfile.contacts.facebook : 'НЕТ'}</p></div>
                    <div><p>Website: {props.profilePageProfile.contacts.website != null ?
                        props.profilePageProfile.contacts.website : 'НЕТ'}</p></div>
                    <div><p>Twitter: {props.profilePageProfile.contacts.twitter != null ?
                        props.profilePageProfile.contacts.twitter : 'НЕТ'}</p></div>
                    <div><p>Instagram: {props.profilePageProfile.contacts.instagram != null ?
                        props.profilePageProfile.contacts.instagram : 'НЕТ'}</p></div>
                    <div><p>Youtube: {props.profilePageProfile.contacts.youtube != null ?
                        props.profilePageProfile.contacts.youtube : 'НЕТ'}</p></div>
                    <div><p>Github: {props.profilePageProfile.contacts.github != null ?
                        props.profilePageProfile.contacts.github : 'НЕТ'}</p></div>
                    <div><p>mainLink: {props.profilePageProfile.contacts.mainLink != null ?
                        props.profilePageProfile.contacts.mainLink : 'НЕТ'}</p></div>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;