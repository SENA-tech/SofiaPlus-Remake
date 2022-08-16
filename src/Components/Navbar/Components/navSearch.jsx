import React, { useState } from 'react';

//Components
import SearchForm from './searchForm';

export default function navSearch({ styled }) {

    return (

        <div className="navSF-Base-Search" style={{ display: styled === false ? 'none' : 'flex' }}>
            <div className="navSF-Base-Search-container">
                <SearchForm />
            </div>
        </div>

    );
}