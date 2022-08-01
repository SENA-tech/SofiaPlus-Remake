import React from 'react';
import { Link, Navigate,  } from 'react-router-dom';

//Data
import SearchLogo from '../Import/Search-L.png';

export default function SearchFrom() {

    return (

        <div className='FormSearch'>
            <label id='labelSearch' htmlFor="Searcher">Buscador</label>
            <input autoComplete='off' type='search' id='Searcher' />
            <Link to='search'>
                <div id='btn-searcher'>
                    <img src={SearchLogo} alt="search buttom" height={30} />
                </div>
            </Link>
        </div>

    )

}