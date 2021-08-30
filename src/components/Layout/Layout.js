import classes from './Layout.module.scss';
import { Fragment } from 'react';
import Header from './Header';
import { MobileView } from 'react-device-detect';

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <main className={classes.main}>{props.children}</main>
            <MobileView>
                <div className={classes.overlay}></div>
            </MobileView>
        </Fragment>
    )
};

export default Layout;