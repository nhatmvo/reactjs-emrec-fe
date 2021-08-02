import React, { Fragment } from 'react';

import classes from './Header.module.scss';
import HeaderNavigationBar from './HeaderNavigationBar';


const Header = () => {
    return (<Fragment>
        <header className={classes.header}>
            <div>
                <div className={classes['header-label']}>
                    <span className={classes['header-main']}>Hồ sơ y tế</span>&nbsp;&nbsp;
                    <span className={classes['header-alter']}>điện tử</span>
                </div>
                <div className={classes["vendor-brand"]}>Bệnh viện Hữu nghị Việt Đức</div>
            </div>
            <HeaderNavigationBar />
        </header>
        <div className={classes.placeholder}></div>
    </Fragment>)
};

export default Header;
