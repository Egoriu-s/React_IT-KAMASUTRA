// import React from 'react';
// import axios from "axios";
// import UsersFunctional from "./UsersFunctional";

// class UsersClass extends React.Component {
//
//     constructor(props) {
//         super(props);
//         console.log("New object created");
//     }
//
//     numberPageChanged = (currentPage) => {
//         this.props.setPageContainer(currentPage);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
//             this.props.setUsersFromServerContainer(response.data.items);
//         });
//     };
//
//     buttonNextChanged = () => {
//         this.props.setPageContainer(this.props.usersPage.currentPage + 1);
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage + 1}&count=${this.props.usersPage.pageSize}`).then(response => {
//             debugger
//             // if (response.data.items.length == 0) {
//             //     console.log('THE END');
//             // }
//             this.props.setUsersFromServerContainer(response.data.items);
//         });
//     };
//
//     render() {
//         return <UsersFunctional numberPageChanged={this.numberPageChanged}
//                                 buttonNextChanged={this.buttonNextChanged}
//                                 unfollowFriendStateContainer={this.props.unfollowFriendStateContainer}
//                                 followFriendStateContainer={this.props.followFriendStateContainer}
//                                 usersArray={this.props.usersPage.usersArray}
//                                 currentPage={this.props.usersPage.currentPage}
//                                 totalCount={this.props.usersPage.totalCount}
//                                 pageSize={this.props.usersPage.pageSize}/>
//     }
//
//     componentDidMount() {
//         axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
//             debugger
//             this.props.setUsersFromServerContainer(response.data.items);
//             this.props.setTotalCountContainer(response.data.totalCount);
//         });
//     }
//
// }

// export default UsersClass;
