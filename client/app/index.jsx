import React from 'react';
import ReactDOM from 'react-dom';
import {Store} from './store/Store.jsx';
//Components
import {UserDrawer} from "./component/UserDrawer.jsx";
import {RegisterDialog} from './component/RegisterDialog.jsx';
//-----------------------------------------

class App extends React.Component {
    constructor() {
        super();

        this.onStateChange = this.onStateChange.bind(this);
    }

    componentDidMount() {
        Store.subscribe(this.onStateChange);
    }

    onStateChange() {
        this.setState(Store.getState());
    }

    componentWillUnmount() {
        Store.unSubscribe(this.onStateChange);
    }

    render() {
        const {
            users,
            currentUser
        } = Store.getState();

        let content;
        if (currentUser) {
            content = (
                <div>
                    <h1>Hello {currentUser.name}</h1>
                </div>
            )
        } else {
            content = (
                <RegisterDialog/>
            );
        }

        return (
            <UserDrawer drawerTitle="Users">
                {content}
            </UserDrawer>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('AppRoot')
);

