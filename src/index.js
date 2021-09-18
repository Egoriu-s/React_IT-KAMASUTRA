import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import React from "react";
import App_2 from "./App";

// setInterval(() => {
//     store.dispatch({type: 'FAKE'})
// }, 1000)

ReactDOM.render(
    <App_2/>, document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// let rerenderEntireTree = () => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <BrowserRouter>
//                 <Provider store={store}>
//                     <App/>
//                 </Provider>
//                 {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
//             </BrowserRouter>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// };

// rerenderEntireTree();

// store.subscribe(() => {
//     rerenderEntireTree();
// });

// store.subscribe(() => {
//     let state = store.getState();
//     rerenderEntireTree(state);
// });

// ReactDOM.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//             {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store}/>*/}
//         </BrowserRouter>
//     </React.StrictMode>,
//     document.getElementById('root')
// );