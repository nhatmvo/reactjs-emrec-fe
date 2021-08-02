import classes from './SearchResultTotal.module.scss';

const SearchResultTotal = props => {
    return <div className={classes.main}>
        {props.total} kết quả tìm kiếm cho&nbsp;<span>"{props.searchInput}"</span>
    </div>
};

export default SearchResultTotal;