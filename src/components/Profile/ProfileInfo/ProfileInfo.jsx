import React from 'react';
import style_profileInfo from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img className={style_profileInfo.img_background} src={props.background} alt=''/>
            </div>
            <div><img className={style_profileInfo.img_AVATAR} src={props.avatar} alt=''/></div>
            <div>avatar Egorius +description</div>
        </div>
    );
};

export default ProfileInfo;