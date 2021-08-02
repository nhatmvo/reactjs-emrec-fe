import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './HeaderNavigationBar.module.scss';

const HeaderNavigationBar = (props) => {
    return <nav className={classes.nav}>
        <ul>
            <li>
                <NavLink to="/patient/add" activeClassName={classes.active}>
                    Bệnh nhân mới
                </NavLink>
            </li>
            <li>
                <NavLink to="/search" activeClassName={classes.active}>
                    Tìm kiếm bệnh nhân
                </NavLink>
            </li>
            <li>
                <NavLink to="/history" activeClassName={classes.active}>
                    Lịch sử
                </NavLink>
            </li>
            <li>
                <div>Bác sĩ Nguyên</div>
            </li>
        </ul>
    </nav>
};

export default HeaderNavigationBar;

