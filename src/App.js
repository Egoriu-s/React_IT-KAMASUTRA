import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/Dialogs_Container";
import FriendsContainer from "./components/Friends/Friends_Container";
import UsersContainer from "./components/users/Users_Container";
import ProfileContainer from "./components/Profile/Profile_Container";
import HeaderContainer from "./components/Header/Header_Container";


const App = (props) => {

    return (

        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId' render={() => <ProfileContainer/>}/>
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/friends' render={() => <FriendsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

                {/*<Route path='/profile' render={() => <Profile store={props.store}/>}/>*/}
                {/*<Route path='/dialogs'*/}
                {/*       render={() => <DialogsContainer store={props.store}/>}/>*/}
                {/*<Route path='/friends' render={() => <Friends friendsPage={props.state.friendsPage}/>}/>*/}
            </div>
        </div>

    );
};

export default App;
