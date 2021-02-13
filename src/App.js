import React from 'react';
import "./App.css";
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile postsArray={props.postsArray}/>}/>
                    <Route path='/dialogs' render={() => <Dialogs dialogsArray={props.dialogsArray}
                                                                  messagesArray={props.messagesArray}/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;

{/*<Route path='/dialogs' render={() => <Dialogs dialogsArray={dialogsArray}*/}
{/*                                              messagesArray={props.messagesArray}/>}/>*/}