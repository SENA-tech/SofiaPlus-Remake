import React from 'react';

//Data
import SearchLogo from '../Import/Search-L.png';

export default function SearchFrom({ visible, hide }) {

    return (

        <form action="" method="get" className='FormSearch'>
            <input autoComplete='off' type="text" name="search" id="searcher" />
            <button type="submit" id='btn-searcher'>
                <img src={SearchLogo} alt="search buttom" height={30} />
            </button>
        </form>

    )

}