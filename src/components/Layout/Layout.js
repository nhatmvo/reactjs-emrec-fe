import classes from './Layout.module.scss'; 
import { Fragment } from 'react';
import Header from './Header';

const Layout = (props) => {
    return (
        <Fragment>
            <Header />
            <main className={classes.main}>{props.children}</main>
        </Fragment>
    )
};

export default Layout;