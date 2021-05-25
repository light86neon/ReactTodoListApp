import React from "react";

import './style.css';

const SearchPanel = () => {

    const searchText = 'Type hete to search';
    const searchStyle = {
        fontSize: '25px'
    }
    return <input
        style={searchStyle}
        placeholder={ searchText }
    />
};

export default SearchPanel;
