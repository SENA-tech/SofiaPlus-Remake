import React from 'react';

//Data
import SearchLogo from '../Import/Search-L.png';

export default function SearchFrom({ visible, hide }) {

    return (

        <form action="" method="GET" className='FormSearch'>
            <label id='labelSearch' htmlFor="Searcher">Buscador</label>
            <input autoComplete='off' type='search' name="search" id='Searcher' />
            <button type="submit" id='btn-searcher'>
                <img src={SearchLogo} alt="search buttom" height={30} />
            </button>
        </form>

    )

}