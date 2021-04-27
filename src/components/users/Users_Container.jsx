import React from 'react';
import {connect} from "react-redux";
import axios from "axios";
import UsersFunctional from "./UsersFunctional";
import {
    followFriend,
    setIsFetching,
    setPage,
    setTotalCount,
    setUsersFromServer,
    unfollowFriend
} from "../../redux/usersPage_reduser";

class UsersClassContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log("New object created");
    }

    componentDidMount() {
        this.props.setIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            debugger
            this.props.setIsFetching(false);
            this.props.setUsersFromServer(response.data.items);
            this.props.setTotalCount(response.data.totalCount);
        });
    }

    numberPageChanged = (currentPage) => {
        this.props.setIsFetching(true);
        this.props.setPage(currentPage);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.usersPage.pageSize}`).then(response => {
            // debugger
            this.props.setIsFetching(false);
            this.props.setUsersFromServer(response.data.items);
        });
    };

    buttonNextChanged = () => {
        this.props.setIsFetching(true);
        this.props.setPage(this.props.usersPage.currentPage + 1);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersPage.currentPage + 1}&count=${this.props.usersPage.pageSize}`).then(response => {
            this.props.setIsFetching(false);
            this.props.setUsersFromServer(response.data.items);
        });
    };

    render() {
        return <UsersFunctional numberPageChanged={this.numberPageChanged}
                                buttonNextChanged={this.buttonNextChanged}
                                unfollowFriend={this.props.unfollowFriend}
                                followFriend={this.props.followFriend}
                                usersArray={this.props.usersPage.usersArray}
                                currentPage={this.props.usersPage.currentPage}
                                totalCount={this.props.usersPage.totalCount}
                                pageSize={this.props.usersPage.pageSize}
                                isFetching={this.props.usersPage.isFetching}/>
    }

}

let mapStateToProps = (state) => {
    return {
        usersPage: state.usersPage
    }
};

let obj_ActionCreator_ToDispatch = {
    followFriend,
    unfollowFriend,
    setUsersFromServer,
    setPage,
    setTotalCount,
    setIsFetching
};

const UsersContainer = connect(mapStateToProps, obj_ActionCreator_ToDispatch)(UsersClassContainer);

export default UsersContainer;

// Старый mapDispatchToProps для повторения

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followFriendStateContainer: (id) => {
//             dispatch(followFriendActionCreator(id));
//         },
//         unfollowFriendStateContainer: (id) => {
//             dispatch(unfollowFriendActionCreator(id));
//         },
//         setUsersFromServerContainer: (users) => {
//             dispatch(setUsersFromServerActionCreator(users));
//         },
//         setPageContainer: (currentPage) => {
//             dispatch(setPageActionCreator(currentPage));
//         },
//         setTotalCountContainer: (totalCount) => {
//             dispatch(setTotalCountActionCreator(totalCount));
//         },
//         setIsFetchingContainer: (isFetching) => {
//             dispatch(setIsFetchingActionCreator(isFetching));
//         }
//     }
// };