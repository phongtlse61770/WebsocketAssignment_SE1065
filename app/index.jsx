import React from 'react';
import ReactDOM from 'react-dom';


//Components
import {UserDrawer} from "./component/UserDrawer.jsx";

class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <UserDrawer>
                <div>
                    <h1>Hello</h1>
                </div>
            </UserDrawer>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('AppRoot')
);

