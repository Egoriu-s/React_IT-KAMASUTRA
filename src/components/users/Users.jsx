import React from 'react';
import style_users from "./Users.module.css";
import UserName from "./UserName/UserName";
import axios from "axios";

const Users = (props) => {

    let getUsers = () => {
        if (props.usersArray.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                debugger
                props.setUsersFromServerContainer(response.data.items);
            });
        }
    };

    let usersElements = props.usersArray.map((el) => <UserName key={el.id} name={el.name}
                                                               status={el.status} city={el.city}
                                                               photos={el.photos}
                                                               userID={el.id} followed={el.followed}
                                                               followFriendStateContainer={props.followFriendStateContainer}
                                                               unfollowFriendStateContainer={props.unfollowFriendStateContainer}/>);


    let setUsersFromServer = () => {
        // props.setUsersFromServerContainer([
        //         {
        //             id: 1,
        //             followed: true,
        //             foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
        //             name: 'Egorius',
        //             status: 'I like football',
        //             city: 'LA'
        //         },
        //         {
        //             id: 2,
        //             followed: false,
        //             foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
        //             name: 'Sveta',
        //             status: 'I like ice cream',
        //             city: 'Moscow'
        //         },
        //         {
        //             id: 3,
        //             followed: false,
        //             foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
        //             name: 'Andrey',
        //             status: 'I like computer games',
        //             city: 'Orel'
        //         },
        //         {
        //             id: 4,
        //             followed: true,
        //             foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
        //             name: 'Olya',
        //             status: 'I like pizza',
        //             city: 'SPb'
        //         },
        //         {
        //             id: 5,
        //             followed: true,
        //             foto: 'https://s8.cdn.eg.ru/wp-content/uploads/2020/02/nev-pre2125007.jpg',
        //             name: 'Alina',
        //             status: 'I like summer',
        //             city: 'Tula'
        //         }
        //     ]);
        console.log('OK');
    };

    return (
        <div className={style_users.content}>

            <div>
                {usersElements}
            </div>
            <div className={style_users.button}>
                <button onClick={getUsers}>Get users</button>
            </div>
            <div className={style_users.button}>
                <button onClick={setUsersFromServer}>Show more</button>
            </div>
        </div>
    );
};

export default Users;