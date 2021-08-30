import { Fragment } from 'react';
import SearchBox from '../../components/Search/SearchBox';
import classes from './SearchMobile.module.scss';

const SearchMobile = () => {
    return <Fragment>
        <SearchBox />
        <div className={classes.overlay}></div>
    </Fragment>
};

export default SearchMobile;