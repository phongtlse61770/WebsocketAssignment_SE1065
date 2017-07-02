import React, {PureComponent} from "react"
import Drawer from 'react-md/lib/Drawers';
import Button from 'react-md/lib/Buttons/Button';
import Toolbar from 'react-md/lib/Toolbars';

// import inboxListItems from 'constants/inboxListItems';

class UserDrawer extends PureComponent {
    constructor() {
        super();

        this.state = {
            visible: true,
            inline: true,
            className: "md-cell--3 md-divider-border md-divider-border--right",
            onMediaTypeChange: ()=>{/*Do nothing*/},
            onVisibilityChange: ()=>{/*Do nothing*/}
        };
    }

    render() {
        const {
            drawerTitle,
            children,
            navContent
        } = this.props;

        const header = (
            <Toolbar
                colored
                title={drawerTitle}
                className="md-divider-border md-divider-border--bottom"
            />
        );

        return (
            <div className="md-grid">
                <Drawer
                    {...this.state}
                    id="drawer"
                    type={Drawer.DrawerTypes.PERSISTENT}
                    header={header}
                >
                    {navContent}
                </Drawer>
                <div className="md-cell--9">
                    {children}
                </div>
            </div>
        );
    }
}

export {UserDrawer};