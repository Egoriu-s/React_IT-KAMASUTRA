import React from 'react';
import axios from "axios";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {setIsFetching, setUserData} from "../../redux/auth_reduser";
import Header from "./Header";


class HeaderClassContainer extends React.Component {

    constructor(props) {
        super(props);
        console.log("Header created");
    }

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`).then(response => {
            debugger
            this.props.setUserData(response.data.id, response.data.email, response.data.login);
        });
    }

    render() {
        return <Header {...this.props} auth={this.props.auth}/>
    }

}

let mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

let obj_ActionCreator_ToDispatch = {
    setUserData: setUserData,
    setIsFetching: setIsFetching
};


const HeaderUrlDataContainer = withRouter(HeaderClassContainer);

const HeaderContainer = connect(mapStateToProps, obj_ActionCreator_ToDispatch)(HeaderUrlDataContainer);

export default HeaderContainer;

