import React,{PureComponent} from "react"
import Drawer from 'react-md/lib/Drawers';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';
import inboxListItems from 'constants/inboxListItems';

class UserDrawer extends PureComponent {
    constructor(){
        super();
    }

    render(){
        let {
            children
        } = this.props;

        return (
            <div className="md-grid">
                <Button raised label="Toggle Drawer Left" onClick={this._toggleLeft} />
                <Button raised label="Toggle Drawer Right" onClick={this._toggleRight} />
                <Drawer
                    {...this.state}
                    navItems={inboxListItems}
                    onVisibilityToggle={this._handleToggle}
                    type={Drawer.DrawerTypes.TEMPORARY}
                    header={header}
                    style={{ zIndex: 100 }}
                />
            </div>
        );
    }
}

export {UserDrawer};