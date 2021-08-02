import classes from './Search.module.scss';
import SearchBox from '../../components/Search/SearchBox';
import SearchResults from '../../components/Search/SearchResults';
import { Fragment, useState } from 'react';
const Search = () => {

    const [searchResult, setSearchResult] = useState(null);
    const [searchKeyWord, setSearchKeyword] = useState('');

    const onSearchHandler = (data, searchKeyWord) => {
        setSearchKeyword(searchKeyWord);
        setSearchResult(data);
    }

    const hasSearchResult = searchResult != null;

    return (
    <Fragment>
        <SearchBox onSearch={onSearchHandler} />
        {hasSearchResult && <SearchResults data={searchResult} searchKeyword={searchKeyWord}/>}
    </Fragment>)

}

export default Search;