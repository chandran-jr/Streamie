import React from 'react';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';

function SearchPage() {
    return (
        <div className="searchpage">

            <div className="searchpage__filter">
                <TuneIcon className="searchpage__filtericon"/>
                <h4>FILTERS</h4>
            </div>

            <hr className="searchpage__hr"/>

        </div>
    )
}

export default SearchPage
