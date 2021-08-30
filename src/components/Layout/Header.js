import React, { Fragment } from 'react';
import { BrowserView } from 'react-device-detect';
import { useHistory } from 'react-router-dom';

import classes from './Header.module.scss';
import HeaderNavigationBar from './HeaderNavigationBar';


const Header = () => {
    const history = useHistory();
    const handleOnHeaderClick = () => {
        history.push("/");
    }

    return (<Fragment>
        <header className={classes.header}>
            <div onClick={handleOnHeaderClick}>
                <div className={classes['header-label']}>
                    <span className={classes['header-main']}>Hồ sơ y tế</span>&nbsp;&nbsp;
                    <span className={classes['header-alter']}>điện tử</span>
                </div>
                <BrowserView>
                    <div className={classes["vendor-brand"]}>Bệnh viện Hữu nghị Việt Đức</div>
                </BrowserView>
            </div>
            <BrowserView>
                <HeaderNavigationBar />
            </BrowserView>
        </header>
        <div className={classes.placeholder}></div>
    </Fragment>)
};


export default Header;