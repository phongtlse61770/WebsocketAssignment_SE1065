import React, {PureComponent} from 'react';
import Dialog from 'react-md/lib/Dialogs';
import Button from 'react-md/lib/Buttons/Button';
import TextField from 'react-md/lib/TextFields/TextField';
import {Action} from '../actions/Action.jsx';
import {User} from "../../../Shared/User";

class RegisterDialog extends PureComponent {
    constructor(props) {
        super(props);

        this.closeDialog = this.closeDialog.bind(this);
        this.handleRegister = this.handleRegister.bind(this);

        this.state = {visible: true};
    }

    handleRegister(username){
        let user = new User(undefined,username);
        Action.registerUser(user);
        this.setState({visible:false});
    }

    closeDialog() {
        this.setState({visible: false});
    };

    render() {
        const {visible} = this.state;
        return (
            <div>
                <Dialog
                    id="registerDialog"
                    visible={visible}
                    title="Register"
                    onHide={this.closeDialog}
                    modal
                >
                    <RegisterContent onRegister={this.handleRegister}/>
                </Dialog>
            </div>
        );
    }
}

class RegisterContent extends React.PureComponent{
    constructor(){
        super();

        this.onRegister = this.onRegister.bind(this);
    }

    onRegister(){
        const {
            onRegister
        } = this.props;

        let value = this.ref.getField().value;
        onRegister(value);
    }

    render() {
      return (
        <div>
            <TextField
                id="floatingTitle"
                label="User name"
                size={10}
                ref={(dom) => {
                    this.ref = dom;
                }}
            />
            <Button
                flat
                label="Register"
                onClick={this.onRegister}
            />
        </div>
      )
    }
}

export {RegisterDialog};
