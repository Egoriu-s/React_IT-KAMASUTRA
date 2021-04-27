import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setProfileOfUser} from "../../redux/profilePage_reduser";
import {withRouter} from "react-router-dom";


class ProfileClassContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log("Profile created");
    }

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}`).then(response => {
            debugger
            this.props.setProfileOfUser(response.data);
        });
    }

    render() {
        return <Profile {...this.props} profilePage={this.props.profilePage}/>
    }

}

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
};

let obj_ActionCreator_ToDispatch = {
    setProfileOfUser: setProfileOfUser
};


const ProfileUrlDataContainer = withRouter(ProfileClassContainer);

const ProfileContainer = connect(mapStateToProps, obj_ActionCreator_ToDispatch)(ProfileUrlDataContainer);

export default ProfileContainer;

