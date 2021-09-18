import ReactDOM from "react-dom";
import React from "react";
import App_2 from "./App";


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App_2/>, div);
    ReactDOM.unmountComponentAtNode(div);
});


// it('renders without crashing', () => {
//     const div = document.createElement('div');
//     ReactDOM.render(
//         <BrowserRouter>
//             <Provider store={store}>
//                 <App/>
//             </Provider>
//         </BrowserRouter>
//         , div);
//     ReactDOM.unmountComponentAtNode(div);
// });
