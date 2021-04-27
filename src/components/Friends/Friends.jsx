import React from 'react';
import style_friends from "./Friends.module.css";
import FriendName from "./FriendName/FriendName";


const Friends = (props) => {

    let friendsElements = props.friendsPage.friendsArray.map((el) => <FriendName key={el.id} name={el.name}
                                                                                 id={el.id}/>);

    return (
        <div className={style_friends.content}>
            {friendsElements}
        </div>
    );
};

export default Friends;